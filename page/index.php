<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/style.css?v=0.0.0">
    <title><?php 
    $name = $_GET['p'];
    echo  preg_replace('/[0-9\@\.\_\;\" "]+/', ' ', $name);
    ?></title>
</head>
<body>
    <h2><?php 
    echo  preg_replace('/[0-9\@\.\_\;\" "]+/', ' ', $name);
    ?></h2>
    
    
      <!-- CONTATO -->
    <section>
        <div id="contact">
          <div class="contactContainer">
            <h2>Contato</h2>
            <div id="contact-content">
    
              <div class="sendForms">
                <form id="form">
                  <div>
                    <label for="name">Nome:</label>
                    <input placeholder="Nome"  type="text" id="name" required="true"></input>
                  </div>
    
                  <div>
                    <label for="surname">Sobrenome:</label>
                    <input placeholder="Sobrenome"  type="text" id="surname" required="true"></input>
                  </div>
    
                  <div>
                    <label for="email">E-mail:</label>
                  <input placeholder="Email"  type="email" id="email" required="true"></input>
                  </div>
    
                  <div> 
                    <label for="message">Mensagem:</label>
                    <textarea placeholder="Escreva sua mensagem" name="message" id="message" cols="30"  required="true"></textarea>
                  </div>
    
                  <div id="checkBox">
    
                    <input type="checkbox" name="confirm" id="confirm">
                    <label for="confirm">Aceito receber email com novidades!</label>
                  </div>
    
                  <button>Enviar</button>
                </form>
              </div>
    
              <div class="formImg">
                <img src="../src/guy+cat.svg" alt="">
    
              </div>
    
            </div>
          </div>
        </div>
  </section> 

</body>
</html>

