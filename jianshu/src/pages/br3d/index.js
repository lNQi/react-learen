import React,{ Component } from 'react';
import { BhWarrper,Top,Jb,Zs,Tl,Left,LeftItem1,LeftItem2,Right } from './style';
import jyt from './bh/jyt.png';
import tl from './bh/tl.png';
import bjt from './bh/bjt.png';
import jh from './bh/jh.png';
import jb from './bh/jb.png';
import sj from './bh/sj.png';
import yx from './bh/yx.png';
import hy from './bh/hy.png';
import sz from './bh/sz.png';
import rw from './bh/rw.png';
import gg from './bh/tz.png';
import qd from './bh/qd.png';
import wj from './bh/wq.png';
import cj from './bh/cj.png';
import nws from './bh/nws.png';
import zb from './bh/zb.png';
import jy from './bh/jy.png';
import bj from './bh/bj.png';
import jt from './bh/jt.png';

class Bh3d extends Component{
  render(){
    return (
      <BhWarrper>
      <video autoPlay="autoplay" muted loop>
      <source src='https://webstatic.bh3.com/video/bh3.com/pv/CG_OP_1800.mp4' />
      </video>
      <Top>
      <i>
      <b><p className='level'>Lv80<span>欧里喀喀喀</span></p></b>
      </i>
      </Top>
      <img className='jyt' src={jyt} alt='' />
      <Tl>
      <img className='tl' src={tl} alt='' />
      <img className='bjt' src={bjt} alt='' />
      <img className='jh' src={jh} alt='' />
      <div className='tldata'>90/90</div>
      </Tl>
      <Jb>
      <img className='jb' src={jb} alt='' />
      <img className='bjt' src={bjt} alt='' />
      <img className='jh' src={jh} alt='' />
      <div className='jbdata'>9999999</div>
      </Jb>
      <Zs>
      <img className='zs' src={sj} alt='' />
      <img className='bjt' src={bjt} alt='' />
      <img className='jh' src={jh} alt='' />
      <div className='jbdata'>9999999</div>
      </Zs>
      <Left>
      <LeftItem1>
      <img className='yx' src={yx} alt='' />
      <p className='zt1'><i>邮箱</i></p>
      </LeftItem1>
      <LeftItem2>
      <img className='yx' src={hy} alt='' />
      <p className='zt1'><i>好友</i></p>
      </LeftItem2>
      <LeftItem1>
      <img className='yx' src={sz} alt='' />
      <p className='zt1'><i>设置</i></p>
      </LeftItem1>
      <LeftItem2>
      <img className='yx' src={rw} alt='' />
      <p className='zt1'><i>任务</i></p>
      </LeftItem2>
      <LeftItem1>
      <img className='yx' src={gg} alt='' />
      <p className='zt1'><i>公告</i></p>
      </LeftItem1>
      <LeftItem2>
      <img className='yx' src={wj} alt='' />
      <p className='zt1'><i>问卷</i></p>
      </LeftItem2>
      </Left>
      <Right>
      <img className='nws' src={nws} alt='' />
      <img className='cj' src={cj} alt='' />
      <img className='zb' src={zb} alt='' />
      <img className='jy' src={jy} alt='' />
      <img className='bj' src={bj} alt='' />
      <img className='jt' src={jt} alt='' />
      </Right>
      </BhWarrper>
    )
  }
}

export default Bh3d;
