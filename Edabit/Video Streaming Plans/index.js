class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}
class StandartPlan extends BasicPlan{
    static hasHD = true;
	static numOfDevices = 2;
	static price = '$12.99';
}
class PremiumPlan extends StandartPlan{
	static hasUHD = true;
	static numOfDevices = 4;
	static price = '$15.99';
}

console.log(BasicPlan.numOfDevices);
console.log(StandartPlan.numOfDevices);
console.log(PremiumPlan.numOfDevices);
