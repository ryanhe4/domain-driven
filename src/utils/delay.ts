export function delay(ms: number) {
    //정해진 ms가 지나야 resolve를 호출하는 프로미스를 리턴한다
    return new Promise(resolve => setTimeout(resolve, ms));
}