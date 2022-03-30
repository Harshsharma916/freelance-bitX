import React, { useEffect, useState } from 'react';
import './bitx.scss';
import bgVector from '../../assets/img/bgVector.png';
import down from '../../assets/img/down.png';
import up from '../../assets/img/up.png';
import zImg from '../../assets/img/zImg.png';
import dollarPot from '../../assets/img/dollarPot.png';
import stake_reward_bg from '../../assets/img/stake_reward_bg.png';
import arrow from '../../assets/img/arrow.png';

const BitXCard = () => {
  const data = [
    {
      name: 'APY',
      value: '50%'
    },
    {
      name: 'Total Staked',
      value: '45 342 000 BTX'
    },
    {
      name: 'Holders',
      value: '7807'
    }
  ];

  return (
    <div className='wrapper'>
      <img src={bgVector} className='bgVector' />
      <div className='container'>
        <div className='card'>
          <div className='stake_earn'>
            <div>
              <img src={zImg} />
              <p>Stake $BTX</p>
            </div>
            <img src={arrow} />
            <div>
              <img src={zImg} />
              <p>Earn $BTX</p>
            </div>
          </div>
          <p className='description'>
            BitX Finance is a decentralized social economic platform that is
            making private aviation accessible to anyone
          </p>
          <hr className='hr' />
          <div className='info'>
            {data.map((item, key) => {
              return (
                <div key={key}>
                  <p className='heading'>{item.name}</p>
                  <p className='data'>{item.value}</p>
                </div>
              );
            })}
          </div>
          <div className='stake_reward'>
            <img src={stake_reward_bg} />
            <div>
              <p className='heading'>My Staked</p>
              <p className='data'>99 000 BTX</p>
            </div>
            <div>
              <p className='heading'>My Reward</p>
              <p className='data'>99 000 BTX</p>
            </div>
          </div>
          <div className='buttonDiv'>
            <div className='stake_button'>
              <p>Stake</p>
              <img src={down} />
            </div>
            <div className='unstake_button'>
              <p>Unstake</p>
              <img src={up} />
            </div>
          </div>
          <div className='claimReward_button'>
            <p>Claim rewards</p>
            <img src={dollarPot} />
          </div>
        </div>
        <div className='card'>
          <div className='stake_earn'>
            <div>
              <img src={zImg} />
              <p>Stake $BTX</p>
            </div>
            <img src={arrow} />
            <div>
              <img src={zImg} />
              <p>Earn $BTX</p>
            </div>
          </div>
          <p className='description'>
            BitX Finance is a decentralized social economic platform that is
            making private aviation accessible to anyone
          </p>
          <hr className='hr' />
          <div className='info'>
            {data.map((item, key) => {
              return (
                <div key={key}>
                  <p className='heading'>{item.name}</p>
                  <p className='data'>{item.value}</p>
                </div>
              );
            })}
          </div>
          <div className='stake_reward'>
            <img src={stake_reward_bg} />
            <div>
              <p className='heading'>My Staked</p>
              <p className='data'>99 000 BTX</p>
            </div>
            <div>
              <p className='heading'>My Reward</p>
              <p className='data'>99 000 BTX</p>
            </div>
          </div>
          <div className='buttonDiv'>
            <div className='stake_button'>
              <p>Stake</p>
              <img src={down} />
            </div>
            <div className='unstake_button'>
              <p>Unstake</p>
              <img src={up} />
            </div>
          </div>
          <div className='claimReward_button'>
            <p>Claim rewards</p>
            <img src={dollarPot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitXCard;
