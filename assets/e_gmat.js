$('#sliderRange_two').hide();
        $('p#total_score_text').hide();
        var commonMultiplier = 100 / 800;
        var commonRestMultiplier = 100 / 60;
        var rangeslider_one = document.getElementById("sliderRange_one");
        var rangeslider_two = document.getElementById("sliderRange_two");
        var output_one = document.getElementById("demo_one_span");
        var output_two = document.getElementById("demo_two_span");
        output_one.innerHTML = rangeslider_one.value;
        output_two.innerHTML = rangeslider_two.value;

        rangeslider_one.oninput = function () {
            output_one.innerHTML = this.value;
        }
        rangeslider_two.oninput = function () {
            output_two.innerHTML = this.value;
        }

        function drawGraph() {
            $('p#total_score_text').show();
            $("div#demo_one").show();
            $("div#demo_two").show();
            var status = true;
            $('.input-value').each(function () {
                // alert($(this).val());
                if ($(this).val() == '' || ($(this).val() > 60)) {
                    // console.log($(this).val());
                    status = false;
                }
            });
            if (!status) {
                alert('Kindly Fill all values properly! And values must be less than 60');
                return false;
            }
            $('#sliderRange_two').show();
            var qc = +$('.quantC').val();
            var vc = +$('.verbalC').val();
            var qt = +$('.quantT').val();
            var vt = +$('.verbalT').val();

            $("#quantScoreMainDiv #demo_one_span").html(qc);
            $("#quantScoreMainDiv #demo_two_span").html(qt);

            $("#verbalScoreMainDiv #demo_one_span").html(vc);
            $("#verbalScoreMainDiv #demo_two_span").html(vt);
            $('div#demo_two .arrow_icon').css('top', '21px');
            $('div#demo_two .arrow_icon').css('transform', 'scale(-1, 1)');

            var qDiff = Math.abs(qt - qc);
            var vDiff = Math.abs(vt - vc);


            var totalScore = 200 + ((qc + vc) * 5);
            var targetScore = 200 + ((qt + vt) * 5);
            var diff_sum = targetScore - totalScore;
            diff_sum = Math.abs(diff_sum);
            var diff_left = commonMultiplier * totalScore + 1;
            // alert(totalScore + '==>' + targetScore);
            $('#sliderRange_one').val(totalScore);
            $('#totalScoreMainDiv span#totalScore').html(totalScore);
            $('#quantScoreMainDiv span#totalScore').html(qc);
            $('#verbalScoreMainDiv span#totalScore').html(vc);
            $('#sliderRange_two').val(targetScore);

            $(".totalScoreDiv p").html(totalScore);
            $(".quantScoreDiv p").html("Q" + qc);
            $(".verbalScoreDiv p").html("V" + vc);


            var targetScoreIni = targetScore;
            var totalScoreIni = totalScore;
            totalScore = commonMultiplier * totalScore + "%";
            targetScore = commonMultiplier * targetScore + "%";
            var quantTotalScore = commonRestMultiplier * qc;
            var quantTargetScore = commonRestMultiplier * qt;
            var verbalTotalScore = commonRestMultiplier * vc;
            var verbalTargetScore = commonRestMultiplier * vt;

            var qLeft = quantTotalScore + 1;
            var vLeft = verbalTotalScore + 1;

            var quantTotalScore = commonRestMultiplier * qc + "%";
            var quantTargetScore = commonRestMultiplier * qt + "%";
            var verbalTotalScore = commonRestMultiplier * vc + "%";
            var verbalTargetScore = commonRestMultiplier * vt + "%";
            var resultQuantText = "";
            var resultVerbalText = "";
            if (qc == qt) {
                $('#quantScoreMainDiv .diff_range').hide();
                $('#quantScoreMainDiv div#demo_two .arrow_icon').css('top', '52px');
                $('#quantScoreMainDiv div#demo_two .arrow_icon').css('transform', 'scale(1, -1)');
                resultQuantText = "which is <b>equal</b> to your target score";
            }
            else if (qc < qt) {
                $('#quantScoreMainDiv .diff_range').show();
                resultQuantText = "<b>" + qDiff + " points</b> lower than your target quant score of Q" + qt;
            }
            else {
                $('#quantScoreMainDiv .diff_range').hide();
                resultQuantText = "<b>" + qDiff + " points</b> higher than your target quant score of Q" + qt;
            }

            if (vc == vt) {
                $('#verbalScoreMainDiv .diff_range').hide();
                $('#verbalScoreMainDiv div#demo_two .arrow_icon').css('top', '52px');
                $('#verbalScoreMainDiv div#demo_two .arrow_icon').css('transform', 'scale(1, -1)');
                resultVerbalText = "which is <b>equal</b> to your target score";
            }
            else if (vc < vt) {
                $('#verbalScoreMainDiv .diff_range').show();
                resultVerbalText = "<b>" + vDiff + " points</b> lower than your target verbal score of V" + vt;
            }
            else {
                $('#verbalScoreMainDiv .diff_range').hide();
                resultVerbalText = "<b>" + vDiff + " points</b> higher than your target verbal score of V" + vt;
            }





            $('.sliderRange_one').css("width", totalScore);
            $('.sliderRange_two').css("width", targetScore);
            $(".diff_range").html("+" + diff_sum);
            diff_left = diff_left + "%";
            $('.diff_range').css("left", diff_left);
            $('div#demo_one').css("left", totalScore);
            $('div#demo_two').css("left", targetScore);
            var resultText = "";

            $("#quantScoreMainDiv .diff_range").html("+" + qDiff);
            $("#verbalScoreMainDiv .diff_range").html("+" + vDiff);


            qLeft = qLeft + "%";
            vLeft = vLeft + "%";
            $('#quantScoreMainDiv .sliderRange_one').css("width", quantTotalScore);
            $('#quantScoreMainDiv .sliderRange_two').css("width", quantTargetScore);
            $('#verbalScoreMainDiv .sliderRange_one').css("width", verbalTotalScore);
            $('#verbalScoreMainDiv .sliderRange_two').css("width", verbalTargetScore);

            $('#quantScoreMainDiv #demo_one').css("left", quantTotalScore);
            $('#quantScoreMainDiv #demo_two').css("left", quantTargetScore);
            $('#verbalScoreMainDiv #demo_one').css("left", verbalTotalScore);
            $('#verbalScoreMainDiv #demo_two').css("left", verbalTargetScore);
            $('#quantScoreMainDiv .diff_range').css("left", qLeft);
            $('#verbalScoreMainDiv .diff_range').css("left", vLeft);

            if (totalScoreIni == targetScoreIni) {
                $('#totalScoreMainDiv .diff_range').hide();
                $('#totalScoreMainDiv div#demo_two .arrow_icon').css('top', '52px');
                $('#totalScoreMainDiv div#demo_two .arrow_icon').css('transform', 'scale(1, -1)');
                resultText = "which is <b>equal</b> to your target score";
            }
            else if (totalScoreIni < targetScoreIni) {
                $('#totalScoreMainDiv .diff_range').show();
                resultText = "<b>" + diff_sum + " points</b> lower than your target GMAT score of " + targetScoreIni;
            }
            else {
                $('#totalScoreMainDiv .diff_range').hide();
                resultText = "<b>" + diff_sum + " points</b> higher than your target GMAT score of " + targetScoreIni;
            }
            $('span#totalScoreSpan').html(resultText);
            $('#quantScoreMainDiv span#totalScoreSpan').html(resultQuantText);
            $('#verbalScoreMainDiv span#totalScoreSpan').html(resultVerbalText);
            output_one.innerHTML = rangeslider_one.value;
            output_two.innerHTML = rangeslider_two.value;

            rangeslider_one.oninput = function () {
                output_one.innerHTML = this.value;
            }
            rangeslider_two.oninput = function () {
                output_two.innerHTML = this.value;
            }
        }