var $addBtn = $('button[name=add-btn]');
$addBtn.on('click', function() {
  var $todoInput = $('input[name=todo]');

  $todoInput.val($.trim($todoInput.val()));
  //내용이 없는 리스트를 추가하지 못하게 한다.

  if ($todoInput.val() == "") {
    alert('할일을 입력해주세요.');
    $todoInput.focus();
    return false;
  }

  $('.main-list').prepend('<li>' + $todoInput.val() + '<button class="btn btn-danger" onclick="deleteBtnClicked(this)">삭제</button>' + '</li>');

  $todoInput.val('');

});

function deleteBtnClicked(btn) {
  $(btn).parent().remove();
}