import React, { useState } from 'react';
import './bitx.scss';
import bgVector from '../../assets/img/bgVector.png';
import down from '../../assets/img/down.png';
import up from '../../assets/img/up.png';
import zImg from '../../assets/img/zImg.png';
import dollarPot from '../../assets/img/dollarPot.png';
import stake_reward_bg from '../../assets/img/stake_reward_bg.png';
import arrow from '../../assets/img/arrow.png';
// import { ModalCard } from './Modal';
import Modal from 'react-modal';

const BitXCard = () => {
  // const [showModal, setshowModal] = useState(false);
  const [showStake, setShowStake] = useState(false);
  const [showUnstake, setShowUnstake] = useState(false);
  const [stakeAmount, setstakeAmount] = useState(0);

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
    <div className='bitxwrapper'>
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
            <div className='stake_button' onClick={() => setShowStake(true)}>
              <p>Stake</p>
              <img src={down} />
            </div>
            <div
              className='unstake_button'
              onClick={() => setShowUnstake(true)}
            >
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
            <div className='stake_button' onClick={() => setShowStake(true)}>
              <p>Stake</p>
              <img src={down} />
            </div>
            <div
              className='unstake_button'
              onClick={() => setShowUnstake(true)}
            >
              <p>Unstake</p>
              <img src={up} />
            </div>
          </div>
          <div className='claimReward_button'>
            <p>Claim rewards</p>
            <img src={dollarPot} />
          </div>
        </div>

        {/* Modal */}
        {/* {showModal && (
          <div className='modal'> */}
        <Modal
          isOpen={showStake || showUnstake}
          onRequestClose={() => {
            setShowStake(false), setShowUnstake(false);
          }}
          ariaHideApp={false}
          className='modalcard'
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            className='modaldiv'
          >
            <h3
              className='font-24'
              style={{
                fontWeight: 800,
                fontSize: '25px'
              }}
            >
              {showStake ? 'STAKING' : 'WITHDRAW'}
            </h3>
            {/* <img
              className='onHover'
              onClick={() => setshowModal(false)}
              style={{
                width: '25px'
              }}
              src={close}
            /> */}
          </div>
          <h4
            className='font-16'
            style={{
              fontWeight: 400,
              marginTop: '12px',
              fontFamily: 'Chakra Petch'
            }}
          >
            Your tokens will be locked for 30 days after deposit (even the
            tokens that are already staked)
          </h4>
          <div
            style={{
              width: '100%',
              height: '14px',
              borderBottom: '1px dashed #42526D'
            }}
          ></div>
          <div
            style={{
              marginTop: '12px'
            }}
            className='pinkpara font-24'
          >
            <span>BALANCE:&nbsp;</span>
            {/* <span>
              {stakingTokenInfo
                ? convertWeiToEgld(stakingTokenInfo.balance)
                : '0'}
            </span> */}
            {/* <span>&nbsp;&nbsp;{STAKING_TOKEN_SERACH}</span> */}
          </div>
          <h6
            className='font-14'
            style={{
              fontWeight: 300,
              marginTop: '20px',
              color: 'black',
              fontFamily: 'Chakra Petch'
            }}
          >
            {showStake ? 'Amount for Staking' : 'Amount to withdraw'}
          </h6>
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              marginTop: '10px'
            }}
          >
            <input
              className='font-16'
              style={{
                height: '41px',
                borderRadius: '10px',
                color: 'black',
                fontWeight: 600,
                border: '1px solid black',
                padding: '8px 20px',
                width: '100%',
                fontFamily: 'Chakra Petch'
              }}
              placeholder='Amount'
              type='number'
              min='0'
              value={stakeAmount}
              onChange={(e) => setstakeAmount(parseInt(e.target.value))}
            />
            <button
              type='submit'
              style={{
                textAlign: 'center',
                fontWeight: 600,
                marginRight: 0,
                fontFamily: 'Montserrat',
                borderRadius: '8px',
                color: 'white',
                border: 'none',
                width: '300px',
                paddingTop: '0',
                marginLeft: '12px'
              }}
              className='max'
              // onClick={onMaximizeStakeAmount}
            >
              MAX
            </button>
          </div>
          <div
            style={{
              marginTop: '20px',
              textAlign: 'center'
            }}
          >
            {/* {stakeInfoMesssage} */}
          </div>
          <button
            type='submit'
            style={{
              marginTop: '30px',
              textAlign: 'center',
              padding: '15px',
              fontWeight: 600,
              marginRight: 0,
              fontFamily: 'Montserrat',
              borderRadius: '8px',
              color: 'white',
              border: 'none',
              width: '100%'
            }}
            className='stake_submit'
            // onClick={stake}
            // disabled={stakeButtonDisabled}
          >
            {showStake ? 'STAKING' : 'WITHDRAW'}
          </button>
        </Modal>
        {/* </div>
        )} */}
      </div>
    </div>
  );
};

export default BitXCard;
