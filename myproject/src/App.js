import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, FormLabel } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, FormControl, } from 'react-bootstrap';



import './App.css';

function App() {
  return (
    
    
    <div className="App">
      
    <div className="limiter" >
			
		  <div className="container-login100"  >
			  <div className="login fr">
				  <form className="login-form" >
					  <span className="login-form-title ">
						  Connectez Vous
					  </span>

					  <div className="wrap-input marge " data-validate = "Username is reauired">
						  <span className="label-input">Email</span>
						  <Form.Control type="email" placeholder="Enter email" />
						  <span class="focus-input100"></span>
						  
					  </div>

					  <div className="wrap-input" data-validate="Password is required">
              			  <span className="label-input">Password</span>
						  <Form.Control type="password" placeholder="Password" />
						  <span class="focus-input100" ></span>
						  
            		  </div>
					
					  <div className="text-right pad ">
						  <a href="#">
						  	Forgot password?
						  </a>
					  </div>
					
					  
						  <div class="wrap-login100-form-btn">
							  <div class="login100-form-bgbtn"></div>
							  <button class="login100-form-btn" type="submit">
								  Submit
							  </button>
						    </div>

							<div class="footer-information">
     
        <p>Or Sign Up With</p>
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
		</div>
			   </form>
			</div>
		</div>
	</div>
	



  </div>
  );
};

export default App;