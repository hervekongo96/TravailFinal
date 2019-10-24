var express = require('express');
var router = express.Router();
var data = require('../data/data');
var nodeMailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Acceuil' });
});
router.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'jessyndaya15@gmail.com',
      pass: 'Palapolo15'
    }
  }); 
  let mailOptions = {
      from: req.body.Email, // sender address
      to: "contact@activa-rdc.com", // list of receivers
      subject: req.body.Subject, // Subject line
      text: req.body.Name, // plain text body
      html: "<h1> Nom: " + req.body.Name +"</h1>"+ 
            "<h4> Email: " + req.body.Email +"</h4>"+
            '<p>'+req.body.Body+'</p>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.send('Message envoyé avec succès!!!');
  });
});
/* GET about pages. */
  router.get('/aboutpdg', function(req, res, next) {
    res.render('about-message-pdg', { title: 'A propos' });
  });

  router.get('/aboutatouts', function(req, res, next) {
    res.render('about-atouts', { title: 'A propos' });
  });

  router.get('/aboutrse', function(req, res, next) {
    res.render('about-engagement-rse', { title: 'A propos' });
  });
  router.get('/aboutstrategies', function(req, res, next) {
    res.render('about-strategies', { title: 'A propos' });
  });
  router.get('/search', function(req, res, next) {
    res.render('search', { title: 'A propos' });
  });

router.get('/fullsearch', function(req, res, next) {
 console.log(req.query);
 const subject = req.query.subject;
  const db = data;
  const result = [];
  for (const key in db) {
    if (db.hasOwnProperty(key)) {
      const element = db[key];
      ''
      if (key.toLocaleLowerCase().indexOf(subject.toLocaleLowerCase()) > -1 || 
      element.title.toLocaleLowerCase().indexOf(subject.toLocaleLowerCase()) > -1 || 
      element.def.toLocaleLowerCase().indexOf(subject.toLocaleLowerCase())> -1) {
        result.push({key, value:element})
      }      
    }
  }
  console.log(result);
  
  res.render('fullsearch', { title: 'A propos', subject, result});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services' });
});
  router.get('/services/:servicce', function(req, res, next) {
    if (data[req.params.servicce]) {
      res.render('blog-single', { title: 'Services', service: data[req.params.servicce] });
    }
    else{
      res.redirect('/');
    }
  });

/* GET services page. */
router.get('/doleances', function(req, res, next) {
  res.render('doleance', { title: 'Doléances' });
});

/* GET actualite page. */
router.get('/actualite', function(req, res, next) {
  res.render('actualite', { title: 'Actualités' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
