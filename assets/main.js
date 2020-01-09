document.addEventListener('DOMContentLoaded', () => {
   
   const btnGenerate = document.getElementById('btnGenerate'),
         txtComment = document.getElementById('txtComment'),
         txtNumSpaces = document.getElementById('txtNumSpaces'),
         txtStartComment = document.getElementById('txtStartComment'),
         radioTypeSpace = document.getElementById('radioTypeSpace'),
         radioTypeTab = document.getElementById('radioTypeTab'),
         txtSeparator = document.getElementById('txtSeparator'),
         numBetweenComment = 4,
         numFormatDefault = 70;

   btnGenerate.addEventListener('click', () => {
      let spaces = '',
          undFormat = '=',
          commentOriginal = '',
          commentFinal = '',
          formatComment = '',
          init = '//';


      if (radioTypeSpace.checked) {
         for (let index = 1; index <= txtNumSpaces.value; index++) {
            spaces += ' ';
         }
      }

      if (radioTypeTab.checked) {
         for (let index = 1; index <= txtNumSpaces.value; index++) {
            spaces += '   ';
         }
      }


      commentOriginal = txtComment.value;

      if (!!txtSeparator.value) {
         undFormat = txtSeparator.value;
      }

      if (!!txtStartComment.value) {
         init = txtStartComment.value;
      }


      if (commentOriginal.length > numFormatDefault) {
         for (let index = 1; index <= commentOriginal.length + 3 + numBetweenComment; index++) {
            formatComment += undFormat;
         }
      } else {
         for (let index = 1; index < numFormatDefault; index++) {
            formatComment += undFormat;
         }
      }

      commentFinal = `${spaces}${init} ${formatComment}\n`;
      commentFinal += `${spaces}${init} ${txtComment.value}\n`;
      commentFinal += `${spaces}${init} ${formatComment}\n`;


      txtComment.value = commentFinal;
      txtComment.focus();
      txtComment.select();
      document.execCommand('copy');

      txtComment.value = commentOriginal;
   });
});











