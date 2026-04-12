const NameList = "Neha Mani Somya Nandini Aryan";
const CityList = "Lucknow Siwan Patna Delhi Noida";
const LanguageList = "CPP Python Java C JavaScript";

export const Name = NameList.split(" ");
export const City = CityList.split(" ");
export const Language = LanguageList.split(" ");


export function random(list) {
    return list[Math.floor(Math.random() * list.length)];

}

export function RandomBool() {

    let ranNum;

    const num = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    if (num < 5) {
        return ranNum = 0
    }
    else {
        return ranNum = 1;
    }
}
