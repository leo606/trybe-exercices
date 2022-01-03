const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

function getWaterFreq(needsSun, size, origin) {
  return needsSun
    ? size * 0.77 + (origin === "Brazil" ? 8 : 7)
    : (size / 2) * 1.33 + (origin === "Brazil" ? 8 : 7);
}

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency: getWaterFreq(needsSun, size, origin),
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

// const savePlants = () => {
//   const plants = JSON.stringify(defaultPlants);
//   localStorage.setItem("plants", plants);
// };

const getPlants = () => {
  return defaultPlants.map((plant) => initPlant(plant));
};

const getPlantById = (id) => {
  return defaultPlants.find((plant) => plant.id === id);
};

const removePlantById = (id) => {
  defaultPlants.filter((plant) => plant.id !== id);
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  const newPlants = defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
  defaultPlants = newPlants;
};

const createNewPlant = (plant) => {
  const newPlant = initPlant({ ...plant });
  defaultPlants.push(newPlant);
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant,
  createNewPlant,
};
