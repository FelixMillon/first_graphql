<template>
    <footer class="footer">
      <p>&copy; {{ currentYear }} - graph-ql. Ian GALMICHE - Felix MILLON - Elone MACCIONI - Ilyès BOULKRINAT</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .footer p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
  </style>
  