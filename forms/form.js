function initAjaxForm() {
  $(document).ready(function () {
    $("#contactForm").submit(function (e) {
      e.preventDefault();

      if (
        $("#name").val() === "" ||
        $("#email").val() === "" ||
        $("#subject").val() === "" ||
        $("#message").val() === ""
      ) {
        $("#errorMsg").text("Por favor, preencha todos os campos.").show();
        return;
      }

      $.ajax({
        url: $(this).attr("action"),
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        beforeSend: function () {
          $("#loading").text("Enviando mensagem...").show();
        },
        success: function (response) {
          $("#sentMessage").text("Mensagem enviada com sucesso!").show();
          $(".php-email-form")[0].reset();
        },
        error: function () {
          $("#errorMsg")
            .text(
              "Ocorreu um erro ao enviar a mensagem. Por favor, entre em contato pelo WhatsApp, telefone ou e-mail."
            )
            .show();
        },
      });
    });
  });
}

initAjaxForm();
