$(function() {
    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');
    var order_template = "<li>name: {{name}}, drink: {{drink}} <button data-id='{{id}}' class='remove'>x</button></li>";

    function addOrder(order) {
        $orders.append(Mustache.render(order_template, order));
    }

    $.ajax({
        type: 'GET',
        url: 'http://rest.learncode.academy/api/ee15/orders',
        success: function(orders) {
            $.each(orders, function(i, order) {
                addOrder(order);
            });
        },
        error: function() {
            alert('error loading orders');
        }
    });

    $('#add-order').on('click', function() {
        var order = {
            name: $name.val(),
            drink: $drink.val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://rest.learncode.academy/api/ee15/orders',
            data: order,
            success: function(order) {
                addOrder(order);
            },
            error: function() {
                alert('error saving order');
            }
        });
    });

    $orders.delegate('.remove', 'click', function() {
        console.log($(this).parent().get(0).tagName);
        $li = $(this).closest('li'); // this motsvarar knappen .remove
        $.ajax({
            type: 'DELETE',
            url: 'http://rest.learncode.academy/api/ee15/orders/' + $(this).attr('data-id'),
            success: function() {
                $li.fadeOut(300, function() {
                    $(this).remove(); // this motsvarar $li
                });
            },
            error: function() {
                alert('error deleting order');
            }
        });
    });
});
