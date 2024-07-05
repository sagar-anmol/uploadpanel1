//import React from 'react';
import './styles.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App: React.FC = () => {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/JjhmTtk/107278a3-e4d7-4486-bc61-55eeea2e95c2.jpg" alt="" />
          <a href="auth" className="btn btn-rounded">Sign In</a>
        </div>
        <div className="showcase-content">
          <h1>Upload & Earn</h1>
          <p>revenue sharing model</p>
          <a href="auth" className="btn btn-xl">
            Start Earning <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </header>

      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-sm">Earning</p>
          </div>
          <div id="tab-2" className="tab-item">
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-sm">model</p>
          </div>
          <div id="tab-3" className="tab-item">
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-sm">more</p>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container">
          {/* Tab Content 1 */}
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  you can also embed others content and vice-versa, revenue from the content will be shared accordingly.
                </p>
                <a href="auth" className="btn btn-lg">Start Now</a>
              </div>
              <img src="https://elwas.org/wp-content/uploads/2021/03/stavki-na-sport.jpg" alt="" />
            </div>
          </div>

          {/* Tab Content 2 */}
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere — personalized for you.
              </p>
              <a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
                <p className="text-md">
                  Watch on your TV
                </p>
                <p className="text-dark">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
                <p className="text-md">
                  Watch instantly or download for later
                </p>
                <p className="text-dark">
                  Available on phone and tablet, wherever you go.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
                <p className="text-md">
                  Use any computer
                </p>
                <p className="text-dark">
                  Watch right on Netflix.com.
                </p>
              </div>
            </div>
          </div>

          {/* Tab Content 3 */}
          <div id="tab-3-content" className="tab-content-item">
            <div className="text-center">
              <p className="text-lg">
                Choose one plan and watch everything on Netflix.
              </p>
              <a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free month ends on 6/19/19</td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Questions? </p>
        <div className="footer-cols">
          
         
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms Of Use</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
