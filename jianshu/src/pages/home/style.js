import styled from 'styled-components';

export const HomeWrapper=styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;

export const HomeLeft=styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img{
  width:625px;
  height:240px;
}
`
export const HomeRight=styled.div`
width:270px;
float:right;
`;
export const TopicWrapper=styled.div`
padding:20px 0 10px 0;
overflow:hidden;
border-bottom:1px solid #dcdcdc;
`;
export const TopicItem=styled.div`
float:left;
height:32px;
line-height:32px;
margin-left:18px;
margin-bottom:18px;
padding-right:10px;
background:#f7f7f7;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
`;

export const ListItem=styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
  display:block;
  width:125px;
  height:100px;
  float:right;
  border-radius:10px;
}
`;

export const RecommendWarpper=styled.div`
margin:30px 0;
width:280px;
`;
export const RecommendItem=styled.div`
width:270px;
height:50px;
margin-bottom:6px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
`;

export const RecommendQrcode=styled.div`
weight:100%;
border:1px solid #f0f0f0;
border-radius:6px;
padding:7px 10px;
overflow:hidden;
padding:10px 22px;
margin-bottom:30px;
margin-right:10px;
.Qrcode{
  weight:60px;
  height:60px;
  float:left;
  display:block;
}
.title{
  text-align: center;
  line-height: 50px;
}
`;
export const LoadMore=styled.div`
width:100%;
height:40px;
line-height:40px;
margin:30px 0;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
cursor:pointer;
`;

export const ListInfo=styled.div`
width:500px;
float:left;
.title{
  line-height:27px;
  font-size:18px;
  font-weight:bold;
  margin-bottom:10px;
  color:#333;
}
.desc{
  line-height:24px;
  font-size:13px;
  color:#999;
}
`;

export const WriterWrapper=styled.div`
width:268px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
`;

export const BackTop=styled.div`
position:fixed;
right:100px;
bottom:100px;
width:80px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
`;
