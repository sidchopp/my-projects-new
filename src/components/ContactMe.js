import React, { useState, useRef } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon, Modal } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import 'semantic-ui-css/semantic.min.css'
//Components
// import sidImage from '../images/sidImage.jpeg'

const myEmail = "sidchopp@gmail.com";

const ContactMe = () => {

  //States
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // EmailJS
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ns631vs', 'contact_form', form.current, 'user_TnY5a5lrQ29TcAvOHuN56')
      .then((result) => {
        if (result.status === 200 || result.text === 'OK') {
          setMessage("Thanks for your message. I 'll be in touch soon.")
        }
      }, (error) => {
        setMessage("Some Error Occured!! Please try Again")
      });
    e.target.reset();
  };

  return (
    <div >
      <Modal
        closeIcon
        open={open}
        trigger={<EmailIcon className='icon' />}
        onClose={() => {
          setOpen(false)
          setMessage("")
        }}
        onOpen={() => setOpen(true)}
        size='small'
      >
        <Modal.Header>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            <span className='font-heading' >Let's talk.</span>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
          >
            <div  >
              <span className='font-heading' >
                I would
                <span>
                  <Icon name='like' />
                </span>
                to hear from you, so feel free to drop a line.
              </span>
            </div>
          </Typography>
        </Modal.Header>
        <Modal.Content  >
          <Modal.Description  >
            <form style={{ marginTop: '30px' }} className="ui form" ref={form} onSubmit={sendEmail}>
              <div className="equal width fields">
                <div className="field">
                  <div className="ui input">
                    <input autoFocus required type="text" placeholder=" Name" name="user_name" />
                  </div>
                </div>
                <div className="field">
                  <div className="ui input">
                    <input required type="text" placeholder=" Email" name="user_email" />
                  </div>
                </div>
              </div>
              <div className="field">
                <textarea placeholder=" Message.." rows="10" name="message" ></textarea>
              </div>
              <div className="field">
                <button className="ui button primary " value="Send" >
                  <span className='font'>Submit</span>
                </button>
                <button
                  className="ui right floated button secondary"
                  value="Send"
                  onClick={() => {
                    setOpen(false);
                    setMessage("");
                  }} >
                  <span className='font'>Back</span>
                </button>
              </div>
              <Typography variant="h5" align="center" >
                {message}
              </Typography>
            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions >
          {/* <Image centered rounded size='tiny' src={sidImage} /> */}
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography align="left" component="h2" variant="h6">
                <div className='font'>
                  <Icon fitted name='mail outline' />  EMAIL
                </div>
              </Typography>
              <Typography gutterBottom align="left" variant="subtitle1" color="text.secondary">
                <div className='font'>
                  <a href={`mailto:${myEmail}`}>
                    {myEmail}
                  </a>
                </div>
              </Typography>
              <Typography align="left" component="h2" variant="h6">
                <div className='font'>
                  <Icon fitted name='mobile alternate' />  MOBILE
                </div>
              </Typography>
              <Typography align="left" variant="subtitle1" color="text.secondary">
                <div className='font'>
                  (587)-436-7497
                </div>
              </Typography>
            </Grid>
            <Grid item xs={6} >
              <Typography align="right" >
                <IconButton
                  color="primary"
                  onClick={() => window.open('https://www.facebook.com/siddchopp')}
                  size="large"
                >
                  <div >
                    <FacebookIcon fontSize="large" />
                  </div>
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => window.open('https://www.linkedin.com/in/sidchopp/')}
                  size="large"
                >
                  <div >
                    <LinkedInIcon fontSize="large" />
                  </div>
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Modal.Actions>
      </Modal>
    </div >
  );
};

export default ContactMe;