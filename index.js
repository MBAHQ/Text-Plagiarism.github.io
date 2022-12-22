document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("check").addEventListener("click", function () {
        var ls1 = document.getElementById('input1').value.split("\n") 
        var ls2 = document.getElementById('input2').value.split("\n")
        var ls1_length = 0
        var ls2_length = 0
        ls1.forEach(l => {
            if (l != ''){
                ls1_length +=1
            }
        })
        ls2.forEach(l => {
            if (l != ''){
                ls2_length +=1
            }
        })

        if (ls1_length != 0 && ls2_length != 0) {
            var word_ls1 = "";
            var word_ls2 = "";

            ls1.forEach((l) => {
              word_ls1 += `${l} `;
            });
            ls2.forEach((l) => {
              word_ls2 += `${l} `;
            });
            var list1 = word_ls1.split(" ");

            var list2 = word_ls2.split(" ");
            var result = [];
            var final_result = [];
            var duplicate_counter = 0;

            var input_length = 0;
            list2.forEach((ll) => {
              if (ll != "") {
                input_length += 1;
              }
            });

            list2.forEach((word) => {
              if (word != " ") {
                if (list1.includes(word)) {
                  result.push(word);
                }
              }
            });
            result.forEach((word) => {
                if (word != '') {
                  if (final_result.includes(word)) duplicate_counter += 1;
                  else {
                    final_result.push(word);
                    duplicate_counter += 1;
                  }
              }
            });
            if (final_result.length != 0) {
                
              var cong = "";
              final_result.forEach((r) => {
                if (r != "") {
                  cong += `${r} `;
                }
              });
                
              window.confirm(`\nالكلمات المتكررة في النص الثاني: ${cong} 
                عدد الكلمات المتكررة:${duplicate_counter}
                من أصل: ${input_length}
                معدل التكرار: ${(duplicate_counter / input_length) * 100}%   
                `);
            } else {
              window.confirm("لا توجد كلمات متشابهة بين النصين");
            }
        }

        // if the user have not enter any thing 
        else {
            if (ls1_length == 0 && ls2_length == 0) {
                alert("قم بالادخال في الحقول")
            }
            else if (ls1_length == 0) {
                alert("قم بالادخال في الحقل الاول")
            }
            else if (ls2_length == 0) {
                alert("قم بالادخال في الحقل الثاني")
            }
        }
    });
})