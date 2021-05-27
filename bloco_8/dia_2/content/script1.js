const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, index, allarray) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!
index: ${index}
allarray:${allarray}
`);
};

emailListInData.forEach(showEmailList);