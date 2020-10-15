import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <div className="item1">
                <h2>let us handle your<br /> project,professionally</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Ex nostrum impedit, laboriosam placeat corrupti facere incidunt<br /> quo exercitationem soluta nemo!</p>
            </div>
            <div className="item2">
                <form action="">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <textarea name="message" placeholder="Message" cols="40" rows="5"></textarea>
                    <div>
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;