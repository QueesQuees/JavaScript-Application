$(document).ready(function () {
    var count = 3;
    // nhập thông tin điểm vào table khi kích vào nút "Nhập thông tin về điểm số"
    $('#nhap').click(function () {
        var toan = parseFloat($('#toan').val())
        var physical = parseFloat($('#physical').val())
        var chemitry = parseFloat($('#chemitry').val())
        

        // Tạo điều kiện về điểm trong phạm vi từ 0 => 10 
        if ($('#name').val() != '' && !(isNaN(toan) || toan < 0 || toan > 10) && !(isNaN(physical) || physical > 10 || physical < 0)
            && !(isNaN(chemitry) || chemitry < 0 || chemitry > 10)) {
            count++;

            // Thêm row và col và gán giá trị từ input
            $('#myTable').append('<tr></tr>');
            $('tr:last').append('<td></td>');
            $('tr:last td:last').html(count);

            $('tr:last').append('<td></td>');
            $('tr:last td:last').html($('#name').val())

            $('tr:last').append('<td></td>');
            $('tr:last td:last').html(parseFloat($('#toan').val()))

            $('tr:last').append('<td></td>');
            $('tr:last td:last').html(physical)

            $('tr:last').append('<td></td>');
            $('tr:last td:last').html(chemitry)

            $('tr:last').append('<td></td>');
            $('tr:last td:last').html('?')

            $('.form-control').val('')


        } else {
            alert("Bạn cần nhập thông tin về tên và điểm số. Điểm là số có giá trị từ 0 đến 10")

        }

    });

    //Tính điểm TB và gán cho cột điểm trung bình
    $('#trungBinh').click(function () {
        $('tr').each(function (index) {
            if (index > 0) {
                var count = 0;
                $(this).children().each(function (a) {
                    if (1 < a && a < 5) {
                        count += parseFloat($(this).text())
                    }
                });
                $(this).children('td:last').text((count / 3).toFixed(1))

            }

        })
    })

    //Tìm học sinh có điểm TB từ 8 trở lên và thêm lớp colorRed
    $('#sinhGioi').click(function () {
        $('tr').each(function (index) {
            if ($(this).children('td:last').text() >= 8) {
                $(this).addClass('colorRed');
            }
        })
    })

})