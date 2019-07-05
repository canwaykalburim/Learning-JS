// 무한 반복

while(1) {
  console.log('I love JavaScript');
  break;  // 이 코드가 없으면 무한 반복
}

// 조건문 사용

i = 0;
while (i < 5) {
  console.log('Hello');
  i++;
}

for (i = 0; i < 5; i++) {
  console.log('Bye');
}

// break와 continue
for (i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Bye');
    break;
  }
  console.log('Hello');
}

for (i = 0; i < 6; i++) {
  if (i === 3) {
    continue;
  }
  console.log('Number is ' + i);
}

// 반복문의 중첩

for (i = 1; i < 10; i++) {
  for (j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}