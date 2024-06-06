// Exibir formulário correspondente ao item selecionado
function showForm(formId) {
    // Ocultar todos os formulários
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });
    // Exibir apenas o formulário selecionado
    document.getElementById(formId).style.display = 'block';
}

// Submissão do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const role = document.getElementById('role').value;
    switch (role) {
        case 'agricultor':
            window.location.href = 'agricultor.html'; // Redireciona para a página do agricultor
            break;
        case 'tecnico':
            window.location.href = 'tecnico.html'; // Redireciona para a página do técnico agrícola
            break;
        case 'gestor':
            window.location.href = 'gestor.html'; // Redireciona para a página do gestor do sistema
            break;
        default:
            alert('Selecione um perfil válido.');
            break;
    }
});

// Adicione aqui a lógica para os formulários de cada perfil de usuário

// Exemplo de função para enviar dados do formulário via AJAX usando jQuery
function submitForm(formData) {
    $.ajax({
        type: 'POST',
        url: 'process.php',
        data: formData,
        success: function(response) {
            // Processar resposta do servidor
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function showForm(formId) {
    var forms = document.querySelectorAll('.form-container');
    forms.forEach(function(form) {
        form.style.display = 'none'; // Oculta todos os formulários
    });
    
    var formToShow = document.getElementById(formId);
    if (formToShow) {
        formToShow.style.display = 'block'; // Mostra o formulário selecionado
    }
    }
    
    function showAlerts() {
        var alertsForm = document.getElementById('alerts');
        if (alertsForm) {
            var otherForms = document.querySelectorAll('.form-container:not(#alerts)');
            otherForms.forEach(function(form) {
                form.style.display = 'none'; // Oculta todos os outros formulários
            });
            alertsForm.style.display = 'block'; // Mostra o formulário de alertas
        }
    }
    
    function showRecommendations() {
        var recommendationsForm = document.getElementById('recommendations');
        if (recommendationsForm) {
            var otherForms = document.querySelectorAll('.form-container:not(#recommendations)');
            otherForms.forEach(function(form) {
                form.style.display = 'none'; // Oculta todos os outros formulários
            });
            recommendationsForm.style.display = 'block'; // Mostra o formulário de recomendações
        }
    }