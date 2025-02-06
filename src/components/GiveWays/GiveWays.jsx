import React from 'react'
import "./GiveWays.scss"
import { FaCommentDots, FaDesktop, FaEnvelopeOpenText, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';

const GiveWays = () => {
    return <div className="give-ways">
        <div className="give-ways-container">
            <div className="give-ways-title">
                <h2>Five ways to give</h2>
            </div>
            <div className="give-ways-wrap">
                <div className="give-ways-wrap__col">
                    <div className="give-ways-wrap__col__icon">
                        <FaMobileAlt />
                    </div>
                    <div className="give-ways-wrap__col__desc">
                        <p className="give-ways-wrap__col__desc__title">Mobile</p>
                        <p className="give-ways-wrap__col__desc__blurb">Give through mobile app</p>
                    </div>
                </div>
                <a className="give-ways-wrap__col give-ways-wrap__col--link" href="https://give.tithe.ly/?formId=5be40c0c-6865-11ee-90fc-1260ab546d11" target="_blank">
                    <div className="give-ways-wrap__col__icon">
                        <FaDesktop />
                    </div>
                    <div className="give-ways-wrap__col__desc">
                        <p className="give-ways-wrap__col__desc__title">Online</p>
                        <p className="give-ways-wrap__col__desc__blurb">Give through website</p>
                    </div>
                </a>
                <div className="give-ways-wrap__col">
                    <div className="give-ways-wrap__col__icon">
                        <FaMoneyBillWave />
                    </div>
                    <div className="give-ways-wrap__col__desc">
                        <p className="give-ways-wrap__col__desc__title">EFT</p>
                        <p className="give-ways-wrap__col__desc__blurb">Deposit to 032035-337128</p>
                    </div>
                </div>
                <div className="give-ways-wrap__col">
                    <div className="give-ways-wrap__col__icon">
                        <FaCommentDots />
                    </div>
                    <div className="give-ways-wrap__col__desc">
                        <p className="give-ways-wrap__col__desc__title">Text</p>
                        <p className="give-ways-wrap__col__desc__blurb">SMS to 0485 864 806</p>
                    </div>
                </div>
                <div className="give-ways-wrap__col">
                    <div className="give-ways-wrap__col__icon">
                        <FaEnvelopeOpenText />
                    </div>
                    <div className="give-ways-wrap__col__desc">
                        <p className="give-ways-wrap__col__desc__title">Cash</p>
                        <p className="give-ways-wrap__col__desc__blurb">Drop it in the offering box</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default GiveWays