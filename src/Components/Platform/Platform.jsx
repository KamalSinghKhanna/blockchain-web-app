import React from 'react'
import './Platform.css'
import groupIcon from '../../asset/images/group.png'
import blockChainIcon from '../../asset/images/blockchain.png'
import globalNetwork from '../../asset/images/global-network.png'
import NumbnerCounter from 'number-counter'
const Platform = () => {
  return (
    <>
    <div className="platform" id="platform">
      <div className="left-p">
        <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/illustration-2-e1614311211637.png" alt="" />
      </div>
      <div className="right-p">
      <span>Profitable Blockchain</span>
        <div>
          <span className="stroke-text">Trusted </span>
          <span>Platform</span>
        </div>
        <div className="details-r">
          <div>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae, eligendi iure totam magni quos consequatur dolorem ipsum odio, sunt facilis architecto ipsa at pariatur quasi repellendus! Fugit, ad magnam?</span>
          </div>
        </div>
        <div className="figures">
          <div>
          <img src={groupIcon} alt="" />
            <span>
              <NumbnerCounter end={1940} start={500} delay="4" preFix="+" />
            </span>
            <span>user joind</span>
          </div>
          <div>
          <img src={globalNetwork} alt="" />
            <span><NumbnerCounter end={408} start={0} delay="4" preFix="+" /></span>
            <span>total global node</span>
          </div>
          <div>
          <img src={blockChainIcon} alt="" />
            <span><NumbnerCounter end={50} start={0} delay="4" preFix="+" /></span>
            <span>programs</span>
          </div>
        </div>
      </div>
  </div>
 
  </>
  )
}

export default Platform