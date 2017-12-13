import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { post } from "selenium-webdriver/http";

@Injectable()
export class NewsService {

  constructor(private router: Router) { }

  goToPost(postId:number){
    this.router.navigate(['post'], {queryParams: {postId: postId}});
  }

  getPost(postId: number): IPost{
    return {img: 'http://www.yeongnam.com/Photo/2016/06/06/L20160606.010190756490001i1.jpg',
    title: '샌디에이고 스마트시티 해커톤대회, 계명대 박창은씨 1위',
    date: 'Posted on June 6, 2016',
    body: '계명대 컴퓨터공학전공 박창은씨(4학년)가 캘리포니아대학 샌디에이고캠퍼스와 샌디에이고시, 퀄컴 등이 공동으로 주최한 ‘샌디에이고 스마트시티 해커톤’ 대회에 참가해 1위를 차지했다. 같은 과 박준희(4학년), 이호준씨(4학년)는 우수 아이디어로 선정되는 등 우수한 성적을 거뒀다.\n' +
    '\n' +
    '지난 5월20일부터 22일까지 미국 캘리포니아대학 샌디에이고캠퍼스에서 열린 해커톤대회는 샌디에이고 시를 스마트하고 친환경적인 시로 만들기 위한 정책 수립을 위해 개최됐다.\n' +
    '\n' +
    '이 대회는 샌디에이고시가 대회 참가자에게 시가 보유하고 있는 에너지, 물, 도로, 폐기물, 공기오염 등과 같은 다양한 실제 데이터를 제공하고, 참여자는 이 데이터를 활용한 혁신적인 아이디어와 기술적인 실현 방안을 도출하는 형태로 진행됐다.\n' +
    '\n' +
    '계명대 컴퓨터공학전공 학생들은 대회에 참가한 전 세계 학생들과 함께 프로젝트 팀을 구성해 샌디에이고 시의 물 사용량을 줄이는 아이디어를 제출했는데, 박창은 학생이 속한 2MAX팀이 대회 1위를 차지했다. 박준희, 이호준 학생이 소속된 SPECTRE팀은 우수 아이디어로 선정되며, 계명대 학생들이 세계적으로 실력을 인정받았다. \n' +
    '\n' +
    '이들은 샌디에이고시 가정마다 물 사용량을 체크하기 위한 센서를 설치하고, 센서마다 물이 얼마만큼 지나가는지 비교해서 누수가 일어나는 곳을 발견, 물 사용량을 줄이는 아이디어를 제출했다. 학생들은 3D프린터를 이용해 시제품을 제작해 실험하고, 물 사용량을 쉽게 체크할 수 있도록 iOS와 안드로이드 2가지 버전의 앱을 만들어 데이터를 관리하도록 했다.\n' +
    '\n' +
    '이들 학생들의 참가는 계명대 산학협력선도대학 (LINC·Leaders in INdustry-university Cooperation) 육성사업의 후원으로 이루어졌다. '};
  }

}
