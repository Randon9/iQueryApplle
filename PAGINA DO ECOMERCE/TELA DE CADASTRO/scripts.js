// scripts.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Aqui você pode adicionar validações adicionais se necessário

    alert('Cadastro realizado com sucesso!');
    // Redirecionar ou enviar os dados para o servidor
});

// scripts.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    document.getElementById('preloader').style.visibility = 'visible'; // Mostra a tela de carregamento

    // Simula um atraso para o redirecionamento (por exemplo, 3 segundos)
    setTimeout(function() {
        window.location.href = 'cadastro.html'; // Substitua pelo caminho da página de destino
    }, 3000);
});
