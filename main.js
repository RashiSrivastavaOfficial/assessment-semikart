$(document).ready(function () {
    $('.multi-step-item').on('click', function(){
        let target = $(this).attr('target');
        $(this).addClass('current');
        $('.multi-step-item').not(this).removeClass('current');
        $('.multi-step-section').each(function(i,e){
            if(target === $(e).attr('id')){
                $(e).show();
            }else{
                $(e).hide();
            }
        })
    })
})