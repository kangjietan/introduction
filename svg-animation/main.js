const kang = document.querySelectorAll("#kang path");
console.log(kang);
kang.forEach((node) => {
  console.log(node.getTotalLength());
});
