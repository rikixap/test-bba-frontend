import React,{Component} from 'react';
import '../styles/Home.css';
import logo  from '../img/logo123123.JPG';
import cake1 from '../img/cake1.jpg';
import cake2 from '../img/cake2.jpg';
import cake3 from '../img/cake3.jpg';
import gedung from '../img/gedung.jpeg';
import store from '../img/store.jpg';


class Home extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        window.onscroll = function() {myFunction()};

        var header = document.getElementById("myHeader");
        var logonav = document.getElementById("logonav");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            logonav.classList.remove("logonav");
          } else {
            header.classList.remove("sticky");
            logonav.classList.add("logonav")
          }
        }
        
    }
    render(){
        return(
            <div>
                <div className="Container container">
                    <div className="sidebar"  id="myHeader">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                                <img src={logo}  className="logonav" id="logonav" alt="logo"/>
                                <div className="menumenumenu">
                                    <div className="textnav"><p>Home</p></div>
                                    <div className="textnav"><p>Personal Storage</p></div>
                                    <div className="textnav"><p>Business Storage</p></div>
                                    <div className="textnav"><p>Why Us?</p></div>
                                    <div className="textnav"><p>Self-Storage Blog</p></div>
                                    <div className="textnav"><p>Own A Self-Storage Facility</p></div>
                                    <div className="textnav"><p>Contact Us</p></div>
                                    <div><p>Reserve Online </p></div>
                                </div>
                            </div>
                        </nav>
                    </div>
                   
                    <div className="wrapper-logo">
                        <div className="logologo">
                                <img src={logo}  className="logo" alt="logo"/>
                        </div>
                        
                        <div className="d-flex unitedstates">
                            <select className="input-bhs"  id="cars" name="cars">
                                <option value="volvo">United States</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>

                            <select className="input-bhs"  id="cars" name="cars">
                                <option value="volvo">En</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
    
                            <div className="icon-social"><i className="fab fa-facebook-f fa-1x"></i></div>
                            <div  className="icon-social"><i className="fab fa-twitter fa-1x"></i></div>
                            <div  className="icon-social"><i className="fab fa-google-plus-g fa-1x "></i> </div>
                            
                        </div>
                       
                    </div>
                    <div className="text-right contact">
                        <p>Make Our Space Your Space <i className="fab fa-whatsapp"></i> +852 8202 0811</p>    
                    </div>             
                    <div className="d-flex personalstorage">
                        <div className="personal-storange">
                            <p className="twotwo">Personal Storage</p>
                            <p className="text-gray">Found out more about storing personal items and how to reserve a storage room online.</p>
                        </div>
                        <div className="personal-storange">
                            <p className="twotwo">Business Storage</p>
                            <p className="text-gray">Create more space in your place of business, simply request a quote now.</p>
                        </div>
                    </div>

                    <div className="wrapper-content">
                    <div id="carouselExampleSlidesOnly"  className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="slide1">
                                         <img src={cake1} className="img11" alt="cake1"/>
                                    <div className="slide11">
                                        <p className="text-light light">DELICIOUS</p>
                                        <div className="slide22">
                                            <div className="centerslide">
                                                <p className="light1">cake is our signature product</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slide1">
                                         <img src={cake2} className="img11" alt="cake2"/>
                                    <div className="slide11">
                                        <p className="text-light light">DELICIOUS</p>
                                        <div className="slide22">
                                        <div className="centerslide">
                                                <p className="light1">cake is our signature product</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slide1">
                                         <img src={cake3} className="img11" alt="cake3"/>
                                    <div className="slide11">
                                        <p className="text-light light">DELICIOUS</p>
                                        <div className="slide22">
                                        <div className="centerslide">
                                                <p className="light1">cake is our signature product</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="text-right kanan">
                            <button className="click"><p className="text-btn">Storange Calculator <i className="fas fa-chevron-right"></i></p></button>
                        </div>
                        <div className="text-right kanan">
                            <button className="click"><p className="text-btn">Reserve Your Space <i className="fas fa-chevron-right"></i></p></button>
                        </div>

                    
                        <div className="cardcard">
                        <div className="kard">
                        <div className="card">
                            <img src={gedung} className="card-img-top" alt="..."/>
        
                            <div className="card-body">
                                <p className="twotwo">Your Promotions</p>
                                <p className="card-text">Find out how much you can save on your lease.</p>
                            </div>
                        </div>
                        <div className="card tengah">
                            <img src={gedung} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="twotwo">Your Packing</p>
                                <p className="card-text">Buy your boxes and packaging materials here.</p>
                            </div>
                        </div>
                        </div>
                        <div className="kard">
                        <div className="card right">
                            <img src={gedung} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="twotwo">Your Bill Payment </p>
                                <p className="card-text">pay the bill for you current storage rental online.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={store} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="twotwo">Your Nearest Store</p>
                                <p className="card-text">Find where our store are located in your country.</p>
                            </div>
                        </div>
                        </div>
                        </div>
                     
                    </div>

                    <div className="menu">
                        <div className="riki">
                        <div className="footer">
                            <p className="text-footer">Your Space</p>
                            <p>What is self-storage?</p>
                            <p>Your promotions</p>
                            <p>Your packaging</p>
                            <p>Your bill payment</p>
                            <p>FAQ</p>
                        </div>
                        <div className="footer">
                            <p className="text-footer">Personal Storage</p>
                            <p>I'm moving my home</p>
                            <p>I'm renovating my home</p>
                            <p>I need extra space at home</p>
                            <p>I need temporary storage</p>
                        </div>
                        </div>
                        <div className="raka">
                        <div className="footer">
                            <p className="text-footer">Business Storage</p>
                            <p>Storage for archiving</p>
                            <p>Storage for e-commerce</p>
                            <p>Business</p>
                            <p>Storage of stock/sales materials</p>
                            <p>Use self-storage as your</p>
                            <p>Integrated  distribution hub</p>
                        </div>
                        <div className="footer menumenu">
                            <p className="text-footer">Why Us?</p>
                            <p>Storage with flexible rent period</p>
                            <p>Business friendly selft-storage</p>
                            <p>Security</p>
                            <p>Acces hours</p>
                            <p>Office opening hours</p>
                        </div>
                        <div className="footer">
                            <p className="twotwo">Self-storage Blog</p>
                            <p className="twotwo">Own A Self-storage Facility</p>
                            <p className="twotwo">About Us</p>
                            <p className="twotwo">Contact Us</p>
                            <p className="twotwo">Reserve Online</p>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex ">
                            <div className="copyright">
                                <p>Terms and Conditions</p>
                            </div>
                            <div  className="copyright">
                                <p>Privacy Policy</p>
                            </div>
                            <div>
                                <p>Sitemap</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


export default Home;