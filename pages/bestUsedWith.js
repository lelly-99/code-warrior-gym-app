
const theEquipment = [
  {
    barbell: {
      'barbell alternate biceps curl': 'The barbell alternate biceps curl can be paired with other biceps exercises, such as hammer curls or preacher curls, to create a comprehensive biceps workout routine.',
      'barbell bench front squat': 'The barbell bench front squat can be paired with other lower body exercises such as lunges or Romanian deadlifts to create a comprehensive lower body workout routine.',
      'barbell bench press': 'The barbell bench press can be paired with exercises like dumbbell flyes or push-ups to add variety to your chest workouts.',
      'barbell bench squat': 'The barbell bench squat can be paired with exercises like lunges or step-ups to further target the lower body muscles',
      "barbell bent arm pullover":'The barbell bent arm pullover can be paired with exercises like lat pulldowns, seated rows, or chest presses to create a comprehensive upper body workout routine',
      "barbell bent over row":"The barbell bent over row can be paired with exercises like pull-ups, seated cable rows, or dumbbell shrugs to create a comprehensive back and upper body workout routine.",
      "barbell biceps curl (with arm blaster)":"The barbell biceps curl with an arm blaster can be paired with exercises such as hammer curls, preacher curls, or concentration curls to create a comprehensive biceps workout routine.",
      "barbell clean and press":"The barbell clean and press can be paired with exercises such as squats, lunges, or bent-over rows to create a comprehensive full-body workout routine",
      "barbell clean-grip front squat":"The barbell clean-grip front squat can be paired with exercises such as Romanian deadlifts, lunges, or calf raises to create a comprehensive lower body workout routine."
    },
    dumbbell: {
      'deep push up': "Deep push-ups can be performed as part of a bodyweight workout routine. However, if you're looking to increase the intensity, you can pair them with equipment such as resistance bands or a weighted vest to add resistance to the movement.",
      'dumbbell alternate biceps curl': 'Dumbbell alternate biceps curls can be performed as part of an upper body or arm-focused workout routine. They can be paired with other exercises such as hammer curls, preacher curls, or concentration curls to create a comprehensive biceps workout routine',
      'dumbbell alternate biceps curl (with arm blaster)': 'Dumbbell alternate biceps curls with an arm blaster can be incorporated into your arm-focused workout routine. They can be paired with other biceps exercises such as hammer curls, preacher curls, or concentration curls to create a comprehensive and challenging biceps workout',
      'dumbbell alternate hammer preacher curl': 'Dumbbell alternate hammer preacher curls can be incorporated into your arm-focused workout routine. They can be paired with other biceps exercises such as dumbbell biceps curls, concentration curls, or cable curls to create a comprehensive and challenging arm workout',
      "dumbbell alternate preacher curl":'Dumbbell alternate preacher curls can be incorporated into your arm-focused workout routine. They can be paired with other biceps exercises such as dumbbell biceps curls, hammer curls, or cable curls to create a comprehensive and challenging arm workout.',
      "dumbbell alternate seated hammer curl":"Dumbbell alternate seated hammer curls can be incorporated into your arm-focused workout routine. They can be paired with other biceps exercises such as dumbbell biceps curls, preacher curls, or cable curls to create a comprehensive and effective arm workout",
      "dumbbell alternate side press":"Dumbbell alternate side press can be incorporated into your shoulder-focused workout routine. It can be paired with other shoulder exercises such as dumbbell shoulder press, lateral raises, or front raises to create a comprehensive and effective shoulder workout.",
      "dumbbell alternating bicep curl with leg raised on exercise ball":"The dumbbell alternating bicep curl with leg raised on an exercise ball can be incorporated into your upper body or full-body workout routine. It can be paired with other bicep exercises such as hammer curls, concentration curls, or preacher curls to create a comprehensive bicep workout.",
      "dumbbell alternating seated bicep curl on exercise ball":"The dumbbell alternating seated bicep curl can be incorporated into your upper body workout routine. It can be paired with other bicep exercises such as hammer curls, concentration curls, or preacher curls to create a comprehensive bicep workout",
      "dumbbell arnold press":"The dumbbell Arnold press can be incorporated into your shoulder and upper body workout routine. It can be paired with other shoulder exercises such as lateral raises, front raises, or upright rows to create a comprehensive shoulder workout.",
    },
    cable : {
      'cable alternate shoulder press': 'The cable alternate shoulder press can be paired with other shoulder exercises such as lateral raises, front raises, or upright rows to create a comprehensive shoulder workout. Additionally, you can incorporate exercises targeting other muscle groups, such as chest or triceps exercises, for a well-rounded upper body workout.',
      'cable alternate triceps extension': 'The cable alternate triceps extension can be paired with other triceps exercises, such as triceps pushdowns or triceps dips, to create a comprehensive triceps workout. Additionally, you can incorporate exercises targeting other muscle groups, such as chest or shoulders exercises, for a well-rounded upper body workout.',
      'cable assisted inverse leg curl': 'The cable assisted inverse leg curl can be paired with other exercises that target the hamstrings, such as Romanian deadlifts or hamstring curls using different equipment. Additionally, you can incorporate exercises targeting other lower body muscle groups, such as squats or lunges, to create a comprehensive lower body workout',
      "cable bar lateral pulldown":'The cable bar lateral pulldown can be paired with other exercises that target the back muscles, such as seated rows or bent-over rows, to create a comprehensive back workout. Additionally, incorporating exercises for other upper body muscle groups, such as chest presses or shoulder presses, can provide a balanced workout.',
      "cable bench press":"The cable bench press can be paired with exercises that target the chest muscles, such as dumbbell flyes or push-ups, to create a comprehensive chest workout. Additionally, incorporating exercises for other upper body muscle groups, such as shoulder presses or triceps dips, can provide a balanced workout.",
      "cable close grip curl":"The cable close grip curl can be paired with exercises that target the biceps and other muscles of the upper body. For a comprehensive arm workout, you can include exercises such as triceps pushdowns or hammer curls. Additionally, incorporating exercises for other muscle groups, such as chest presses or shoulder presses, can provide a well-rounded workout.",
      "cable concentration curl":"The cable concentration curl can be paired with other biceps exercises to create a comprehensive arm workout. For example, you can incorporate exercises such as hammer curls, preacher curls, or barbell curls to target the biceps from different angles. Additionally, including exercises for other muscle groups, such as triceps dips or shoulder presses, can provide a well-rounded workout.",
      "cable concentration extension (on knee)":"The cable concentration extension (on knee) exercise can be paired with other triceps exercises to create a comprehensive arm workout. For example, you can incorporate exercises such as triceps dips, triceps pushdowns, or overhead triceps extensions to target the triceps from different angles. Including exercises for other muscle groups, such as biceps curls or shoulder presses, can also provide a balanced workout.",
    },
    wheel_roller: {
      'standing wheel rollerout': "The plank is a great exercise to engage your core muscles and build stability. Performing planks before or after the standing wheel rollout can help activate your core and enhance overall core strength.",
      'wheel rollerout': 'Incorporate Russian twists into your workout routine to target the oblique muscles and add rotational strength to your core.',
      
    },
  }
];
let theItem = localStorage.getItem("equipment")

document.addEventListener("DOMContentLoaded", async () => {
  const barbellsContainer = document.getElementById("bestPair-container");

  const source = document.getElementById("bestPair-template").innerHTML;
  const template = Handlebars.compile(source);
  function findEquipment(equipmentName) {
    for (const equipment of theEquipment) {
      if (equipment.hasOwnProperty(equipmentName)) {
       
        return equipment[equipmentName];
        
      }
    }
    return null;
  }


 
  const equipment = findEquipment(theItem);
  if (equipment) {
    const renderedHtml = template({ barbells: equipment });
    barbellsContainer.innerHTML = renderedHtml;

    // console.log(`Equipment "${theItem}" not found.`);
  }
});

  
