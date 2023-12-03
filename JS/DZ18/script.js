class Care {
    constructor(brand, model, age) {
        this.brand = brand;
        this.model = model;
        this.age = age;
        this.speed = 0;
        this.engineStarted = false;
    }

    startTheEngine() {
        if (this.engineStarted) {
            console.log("Двигатель уже заведен.");
        } else {
            this.engineStarted = true;
        }
    }

    turnOffEngine() {
        if (!this.engineStarted) {
            console.log("Двигатель уже выключен.");
        } else {
            this.engineStarted = false;
        }
    }

    increaseSpeed(speed) {
        if (!this.engineStarted) {
            console.log("Двигатель не заведен. Невозможно увеличить скорость.");
        } else {
            this.speed += speed;
        }
    }

    reduceSpeed(speed) {
        if (!this.engineStarted) {
            console.log("Двигатель не заведен. Невозможно уменьшить скорость.");
        } else {
            this.speed -= speed;
        }
    }

    displayInformation() {
        console.log("Брэнд: " + this.brand);
        console.log("Модель: " + this.model);
        console.log("Год выпуска: " + this.age);
        console.log("Текущая speed: " + this.speed);
        console.log("Двигатель заведен: " + this.engineStarted);
    }
}

let care = new Care("Toyota", "Corolla", 2021);
care.displayInformation();

care.startTheEngine();
care.increaseSpeed(30);
care.displayInformation();

care.turnOffEngine();
care.displayInformation();

care.startTheEngine();
care.reduceSpeed(50);
care.displayInformation();