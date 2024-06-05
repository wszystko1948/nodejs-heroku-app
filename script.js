document.getElementById('startChat').addEventListener('click', function() {
    // Kod do integracji chatu
    const chatWidget = document.createElement('iframe');
    chatWidget.src = 'URL_DO_TWOJEGO_BOTA';
    chatWidget.width = '100%';
    chatWidget.height = '500px';
    document.getElementById('chatContainer').appendChild(chatWidget);
});
