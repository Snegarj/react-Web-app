import React from 'react';
import './style.css';
import Timer from './Timer.js';

import { useState, useEffect } from 'react';

export default function App() {
  const [color, SetColor] = useState('');
  const [white, setWhite] = useState('');
  const [table, settable] = useState('');
  const [radius, setradius] = useState('');

  React.useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const para = document.querySelector('html');

    wrapper.addEventListener('change', function(e) {
      if (e.target.checked) {
        SetColor('black');
        setradius('150px');
        setWhite('white');
        settable('#f2f2f22d');
      } else {
        SetColor('white');
        setWhite('');
      }
    });
  }, []);

  return (
    <>
      <style>
        
        {`
body{
  background-color : ${color}
 }
.s-3 h1{
  color:${white}
}
.s-3 .blue{
  color:${white} 
}

#counter{
  color:${white} 
}
td{
  color:${white}
}

tr:nth-child(even) {
  background-color: ${table}
}


.section5{
  background-color:${white}

}
.section5{
  border-radius:${radius}

}



`}
      </style>

      <div className="header">
        <div className="head-left">
          <div className="block">
            <h1 className="blue">HODLINFO</h1>
            <h6 className="blue">
              <span className="grey">Powered By</span>
              Finstreet
            </h6>
          </div>
        </div>

        <div className="head-center">
          <div className="inline">
            <select name="cars" id="cars">
              <option value="volvo">INR</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">BTS</option>
              <option value="saab">ETH</option>
              <option value="opel">XRP</option>
              <option value="audi">DASH</option>
              <option value="audi">ZEC</option>
              <option value="audi">ETC</option>
              <option value="audi">XEM</option>
              <option value="audi">IOST</option>
            </select>
            <h4 className="inline"> BUY&nbsp;BTC</h4>
          </div>
        </div>
        <div className="head-right">
          <div className="inline">
            <h5 className="blue" id="count">
              <Timer />
            </h5>
            <i class="fa fa-telegram" id="bg-blue">
              
              Connect Telegram
            </i>

            <div class="wrapper">
              <input type="checkbox" id="hide-checkbox" />
              <label for="hide-checkbox" class="toggle">
                <span class="toggle-button">
                  <span class="crater crater-1" />
                  <span class="crater crater-2" />
                  <span class="crater crater-3" />
                  <span class="crater crater-4" />
                  <span class="crater crater-5" />
                  <span class="crater crater-6" />
                  <span class="crater crater-7" />
                </span>
                <span class="star star-1" />
                <span class="star star-2" />
                <span class="star star-3" />
                <span class="star star-4" />
                <span class="star star-5" />
                <span class="star star-6" />
                <span class="star star-7" />
                <span class="star star-8" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div> </div>
      <div className="section2">
        <h4 className="grey" id="h4">
          Best Price to Trade
        </h4>
        <div className="inline">
          <div className="s-1">
            <h4 className="red">1%</h4>
            <span className="grey">5 Mins</span>
          </div>
          <div className="s-2">
            <h4 className="blue">0.72%</h4>
            <span className="grey">1 Hours</span>
          </div>

          <div className="s-3">
            <h1 className="blue"> &#8377; 35,02,545</h1>
            <span className="grey">
              Average BTC/INR not price including commission
            </span>
          </div>
          <div className="s-4">
            <h4 className="blue">0.98%</h4>
            <span className="grey">1 Day</span>
          </div>
          <div className="s-5">
            <h4 className="blue">6.94%</h4>
            <span className="grey">7 Days</span>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="s1 inline">
          <h4>
            Fin
            <span>ST &#8377; EET</span>
          </h4>
          <img src="https://stackblitz.com/files/react-y3ma8h/github/Snegarj/react-Web-app/master/public/ryto.png" />
        </div>
        <div className="s2 inline">
          <div>
            <h3>Learn Basics of Cryptocurrency </h3>
            <h5 className="yellow">
              
              Join courses from Basic to Advance Crypto-Trading
            </h5>
          </div>
          <div className="inline">
            <h5 className="yellow">Powered by</h5>

            <img src="https://stackblitz.com/files/react-y3ma8h/github/Snegarj/react-Web-app/master/public/waz.png" />
          </div>
        </div>
      </div>

      <div className="section4" style={{ overflowX: 'auto' }}>
        <table className="table">
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th id="td">Buy/Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>1</td>
            <td><img src ="https://images.indianexpress.com/2021/06/WazirX.jpg"/>WazirX</td>
            <td>&#8377; 36,96,000</td>
            <td id="td"> &#8377; 36,96,000/&#8377; 36,99,994</td>
            <td className="blue">5.52%</td>
            <td>
              
              <i className="material-icons" id="blue">
                
                arrow_drop_up
              </i>
              &#8377; 1,93,454
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td> <img src="https://www.bestcoinlist.com/img/exchange-logo/BitBns.png"/> Bitbns</td>
            <td>&#8377; 36,84,000</td>
            <td id="td"> &#8377; 36,84,000/&#8377; 36,86,994</td>
            <td className="blue">5.21%</td>
            <td>
              
              <i className="material-icons" id="blue">
                arrow_drop_up
              </i>
              &#8377; 1,93,454
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSijE_pX7V1aCZFQP5p5f7nhK5DGz8BeYoBNwMewRu-flFqOR3sxpjCePHP7U-O859UI&usqp=CAU"/>Giotus</td>
            <td>&#8377; 36,84,000</td>
            <td id="td"> &#8377; 36,84,000/&#8377; 36,86,994</td>
            <td className="blue">5.21%</td>
            <td>
              
              <i className="material-icons" id="blue">
                arrow_drop_up
              </i>
              &#8377; 1,93,454
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>   <img src=" https://pbs.twimg.com/profile_images/1214148137083752449/16vRWQj2.jpg"/>Colodax</td>
            <td>&#8377; 36,84,000</td>
            <td id="td"> &#8377; 36,84,000/&#8377; 36,86,994</td>
            <td className="blue">5.21%</td>
            <td>
              
              <i className="material-icons" id="red">
                
                arrow_drop_down
              </i>
              &#8377; 1,93,454
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>   <img src="https://d3r2dua7bjck5f.cloudfront.net/Zebpay/Zebpay_icon.png"/>Zebpay</td>
            <td> &#8377; 36,84,000</td>
            <td id="td"> &#8377; 36,84,000/&#8377; 36,86,994</td>
            <td className="blue">5.21%</td>
            <td>
              
              <i className="material-icons" id="blue">
                
                arrow_drop_up
              </i>
              &#8377; 1,93,454
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>  <img src="https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/sites/13/2018/05/coindcx-featured-image.png"/>CoinDCX</td>
            <td>&#8377; 36,84,000</td>
            <td> &#8377; 36,84,000/&#8377; 36,86,994</td>
            <td className="blue">5.21%</td>
            <td>
              
              <i className="material-icons" id="blue">
                
                arrow_drop_up
              </i>
              &#8377; 1,93,454
            </td>
          </tr>
        </table>
      </div>
      <div className="section5">
        <div className="inline">
          <div>
            <h1>India's Most Advance Derviatives Exchange </h1>
            <h4 className="bg-blue">Register Now to Start Trading </h4>
          </div>
          <img src="https://stackblitz.com/files/react-y3ma8h/github/Snegarj/react-Web-app/master/public/ftx.png" />
        </div>
      </div>
      <div className="section6">
        <hr />
        <div className="inline">
          <h5 className="grey">
            Copyright 2019 &nbsp; &nbsp; HodlInfo.com &nbsp; Developed By
            <span className="blue"> QuadBTech</span>
          </h5>
          <h5 id="right" className="grey">
            Support
          </h5>
        </div>
      </div>
    </>
  );
}
