let works = [];

function addWork(){
    let workName = prompt(`Eklemek İstediğiniz işi Giriniz.`);
    works.push(workName);
    console.log(`Eklenen iş: ${workName}`);
    localStorage.setItem(workName , works);
}

function saveWork(){
    localStorage.data = JSON.stringify(works);
    localStorage.getItem(works)
}

let kullaniciSecimi = Number(prompt(`Kaç adet iş eklemek istediğinizi giriniz.`));

if(kullaniciSecimi){
    
    for(let i = 0; i < Number(kullaniciSecimi); i++){
        addWork();
        saveWork();
    }
}

