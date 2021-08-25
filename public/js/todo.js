$(function() {
    $('.edit').on('click', function() {
      var target = $(this).prev();
      target.removeAttr('readonly');
      target.focus().blur(function() {
        $(this).attr('readonly', true);
        var id = $(this).attr('data-edit-id');
        var content = $(this).val();
        $.ajax({
          url: '/todo/' + id,
          type: 'PUT',
          data: { content: content }
        }).always(() => {
          window.location.href = '/todo';
        });
      });
    });
    $('.checkbox').on('click', function() {
        var id = $(this).attr('data-id');
        var completed = this.checked;
        $.ajax({
          url: '/todo/' + id + '/completed',
          type: 'PUT',
          data: { completed: completed }
        }).always(() => {
          window.location.href = '/todo';
        });
    });
    $('.delete').on('click', function() {
      var id = $(this).attr('data-delete-id');
      $.ajax({
        url: '/todo/' + id,
        type: 'DELETE'
      }).always(() => {
        window.location.href = '/todo';
      });
    });
  });
  