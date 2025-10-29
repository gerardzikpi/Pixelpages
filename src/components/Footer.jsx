import {Link} from 'react router-dom';


export default function Footer(){
    return(
        <>
        <footer>
            <div className="grid grid-cols 3 bg-gray-400 ">
                <div>
                    <h2>&copy;2025 ReadLearn Inc</h2>
                    <p>Plans and Subscriptions</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h4>Monetization</h4>
                    <p>Write to earn</p>
                    <p>Bonus Coins</p>
                </div>
                <div>
                    <h4>Contact Us</h2>
                    <a href="#">info@readlearn.com</a>
                    
                </div>
            </div>
        </footer>
        </>
    )
}