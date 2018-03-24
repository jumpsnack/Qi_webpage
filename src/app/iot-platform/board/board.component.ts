import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	@ViewChild('list_boardContent') list_boardContent: ElementRef;

	constructor(private http: HttpClient, private renderer: Renderer) { }

	prevList = [
		["Winter 2016", 15],
		["Summer 2016", 15],
		["Summer 2017", 15],
		["Winter 2017", 15]
	]

	ngOnInit() {
		let params = new HttpParams()
		params = params.set('node', 'iot-platform')
		params = params.set('target', 'board_content')

		this.http.get('/api', {
				responseType: 'text' ,
				params: params
			})
			.subscribe(res => {
				if(res !== null){
					this.convertJson2Component(this.list_boardContent, JSON.parse(res))
					console.dir(this.list_boardContent)
				} else {
					this.list_boardContent.nativeElement.innerHTML += 'Nothing yet :-('
				}
			});
	}

	testClick(){
		alert('cllc')
	}

	convertJson2Component(list_boardContent, rcvdJson){
		for(let key in rcvdJson){
			console.dir(rcvdJson[key])

			let item = create_li()
			item = insert_h3(item, key)

			let values = rcvdJson[key]
			let valueType;
			values.forEach((chunked)=>{
				if(chunked.type != undefined){
					valueType = chunked.type
				}

				switch(valueType){
					case "plain":
						item = insert_p(item, chunked["value"])
						break
					case "ul":
						let ulItemType;
						let ul_item = create_ul()
						chunked["value-list"].forEach((listItem)=>{
							if(listItem.type !== undefined){
								ulItemType = listItem.type
							}

							switch(ulItemType) {
								case "plain":
									let ul_style = 'line-height: 1.5em; font-size: 0.8rem; margin: 0.7em'
									if(listItem.children !== undefined){
										let parent_li_item = create_li(listItem.value, ul_style)
										let childrenType
										listItem.children.forEach((child)=>{
											if(child.type !== undefined){
												childrenType = child.type
											}

											switch(childrenType) {
												case "ul":
													let children_ul = create_ul()
													let nestedChildType
													child["value-list"].forEach((nestedChild)=>{
														if(nestedChild.type !== undefined){
															nestedChildType = nestedChild.type
														}

														switch(nestedChildType){
															case "plain":
																children_ul = insert_li(children_ul, nestedChild.value, ul_style)
														}
													})
													parent_li_item = insert_component(parent_li_item,children_ul)
											}
										})

										ul_item = insert_component(ul_item, parent_li_item)
									} else {
										ul_item = insert_li(ul_item, listItem["value"], ul_style)
									}
									break
								// case "sub-ul":
								// let sulItemType;
								// let sli_item = create_li()
								// let sli_ul = create_ul()
								// listItem["value-list"].forEach((sulItem)=>{
								// 	if(sulItem.type !== undefined){
								// 		sulItemType = sulItem.type
								// 	}
								//
								// 	switch(sulItemType){
								// 		case "plain":
								// 			sli_ul = insert_li(sli_ul, sulItem.value)
								// 			break
								// 	}
								// })
								// sli_item = insert_component(sli_item, sli_ul)
								// ul_item = insert_component(ul_item, sli_item)
							}
						})
						item = insert_component(item, ul_item)
						break
					case "ol":
						let ol_style = 'line-height: 1.5em; font-size: 0.8rem; margin: 0.7em'
						let nlItemType;
						let nl_item = create_ol()
						chunked["value-list"].forEach((listItem)=>{
							if(listItem.type !== undefined){
								nlItemType = listItem.type
							}

							switch(nlItemType) {
								case "plain":
									nl_item = insert_li(nl_item, listItem["value"], ol_style)
									break
							}
						})
						item = insert_component(item, nl_item)
						break
					case "link":
						let div = create_div()
						div = insert_a(div, chunked.value, chunked.link)
						item = insert_component(item, div)
				}
			})
			console.log(item)
			list_boardContent.nativeElement.appendChild(item)


		}
	}
}

function create_li(text?, style?){
	let li = document.createElement('li')
	if(text !== undefined){
		li.innerText = text
	}
	if(style){
		li.style.cssText = style
	}
	return li
}

function _create_h3(text){
	let h3 = document.createElement('h3')
	h3.innerText = text
	return h3
}

function _create_p(text){
	let p = document.createElement('p')
	p.innerText = text
	return p
}

function create_ul(){
	let ul = document.createElement('ul')
	return ul
}

function create_ol(){
	let nl = document.createElement('ol')
	return nl
}

function create_a(text?: string){
	let a = document.createElement('a')
	a.innerText = text
	return a
}

function create_div(){
	let div = document.createElement('div')
	return div
}

function insert_a(c, text?: string, link?: string){
	let a = create_a(text)
	a.className = 'alert-link'
	a.href = link
	// let a = '<a class="alert-link" (click)="onClick()">'+text+'</a>';
	c.appendChild(a)
	// c.innerHTML += a
	return c
}

function insert_h3(c, text){
	let h3 = _create_h3(text)
	h3.style.cssText = 'margin-top: 2em; font-weight: bold'
	c.appendChild(h3)
	return c
}

function insert_p(c, text){
	let p = _create_p(text)
	p.style.cssText = 'font-size:1rem; lien-height: 1.7em; margin: 12px'
	c.appendChild(p)
	return c
}

function insert_li(c, text, style?: string){
	let li = create_li(text, style)
	c.appendChild(li)
	return c
}

function insert_component(c1, c2){
	c1.appendChild(c2)
	return c1
}