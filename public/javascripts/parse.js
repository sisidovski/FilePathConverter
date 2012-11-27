$(function(){
  $("#submit").click(function(){
    var message     = $("#message").val();
    var replacedMsg = message.replace(/\\/g, "/");
    //replacedMsg     = replacedMsg.replace(/\/\//, "");
    replacedMsg     = "smb:" + replacedMsg;
    $("#parsed").val(replacedMsg);
    $("#parsed").select();
  });
});
