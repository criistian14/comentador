/**
 * @author 
 * @desc
 * @params 
 * @object 
 */

document.addEventListener('DOMContentLoaded', () => {

   const btnGenerate = document.getElementById('btnGenerate'),
         txtComment = document.getElementById('txtComment'),
         txtNumSpaces = document.getElementById('txtNumSpaces'),
         txtSeparator = document.getElementById('txtSeparator'),
         selectLang = document.getElementById('selectLang'),
         dataJs = document.getElementById('dataJs'),
         numBetweenComment = 4,
         numFormatDefault = 60,
         langs = [
            'jsLang',
            'plLang'
         ];




   selectLang.addEventListener('change', (event) => {
      const langSelected = event.target.id;

      if (langSelected == langs[0]) {

         dataJs.classList.add('flex');
         dataJs.classList.remove('hidden');
      } else {

         dataJs.classList.remove('flex');
         dataJs.classList.add('hidden');
      }
   });
         

   btnGenerate.addEventListener('click', () => {

      let spaces = '',
          commentOri = txtComment.value,
          commentFinal = '',
          langSelected = '';

      
      [...selectLang.children].map((divs) => {
         [...divs.children].map((element) => {
            if (element.tagName == 'INPUT') {

               if (element.checked) {
                  langSelected = element.id;
               }
            }
         });
      });


      for (let index = 1; index <= txtNumSpaces.value; index++) {
         spaces += '   ';
      }


      if (langSelected == langs[0]) {
         commentFinal = makeCommentJS(spaces);
      } else if (langSelected == langs[1]) {   
         commentFinal = makeCommentPl('--', spaces, commentOri);
      }


      
      txtComment.value = commentFinal;
      txtComment.focus();
      txtComment.select();
      document.execCommand('copy');

      txtComment.value = commentOri;

   });



   function makeCommentPl(init, spaces, commentOri) 
   {
      let commentFinal = '',
          undFormat = '=',
          formatComment = '';

      if (!!txtSeparator.value) {
         undFormat = txtSeparator.value;
      }

      if (commentOri.length > numFormatDefault) {
         for (let index = 1; index <= commentOri.length + 3 + numBetweenComment; index++) {
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

      return commentFinal;
   }



   function makeCommentJS(spaces) 
   {

      let commentFinal = '',
          end = '*/', 
          init = '/**', 
          undFormat = '*',
          param1 = '@author',
          param2 = '@desc',
          param3 = '@params',
          param4 = '@object';

      const txtAuthor = document.getElementById('txtAuthor'),
            txtParams = document.getElementById('txtParams'),
            txtObject = document.getElementById('txtObject');


      commentFinal = `${spaces}${init}\n`;
      commentFinal += `${spaces} ${undFormat} ${param1} ${txtAuthor.value}\n`;
      commentFinal += `${spaces} ${undFormat} ${param2} ${txtComment.value}\n`;
      commentFinal += `${spaces} ${undFormat} ${param3} ${txtParams.value}\n`;
      commentFinal += `${spaces} ${undFormat} ${param4} ${txtObject.value}\n`;
      commentFinal += `${spaces} ${end}`;

      return commentFinal;
   }

});




