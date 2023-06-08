
const barbells = {
    'barbell alternate biceps curl': 'The barbell alternate biceps curl can be paired with other biceps exercises, such as hammer curls or preacher curls, to create a comprehensive biceps workout routine.',
    'barbell bench front squat': 'The barbell bench front squat can be paired with other lower body exercises such as lunges or Romanian deadlifts to create a comprehensive lower body workout routine.',
    'barbell bench press': 'The barbell bench press can be paired with exercises like dumbbell flyes or push-ups to add variety to your chest workouts.',
    'barbell bench squat': 'The barbell bench squat can be paired with exercises like lunges or step-ups to further target the lower body muscles',
    "barbell bent arm pullover":'The barbell bent arm pullover can be paired with exercises like lat pulldowns, seated rows, or chest presses to create a comprehensive upper body workout routine',
    "barbell bent over row":"The barbell bent over row can be paired with exercises like pull-ups, seated cable rows, or dumbbell shrugs to create a comprehensive back and upper body workout routine.",
    "barbell biceps curl (with arm blaster)":"The barbell biceps curl with an arm blaster can be paired with exercises such as hammer curls, preacher curls, or concentration curls to create a comprehensive biceps workout routine.",
    "barbell clean and press":"The barbell clean and press can be paired with exercises such as squats, lunges, or bent-over rows to create a comprehensive full-body workout routine",
    "barbell clean-grip front squat":"The barbell clean-grip front squat can be paired with exercises such as Romanian deadlifts, lunges, or calf raises to create a comprehensive lower body workout routine."
    };
  document.addEventListener("DOMContentLoaded", async () => {
   
    
    const barbellsContainer = document.getElementById("barbells-container");

    // Get the Handlebars template
    const source = document.getElementById("barbells-template").innerHTML;

    // Compile the template
    const template = Handlebars.compile(source);

    // Render the template with data
    const renderedHtml = template({ barbells: barbells });

    // Insert the rendered HTML into the container element
    barbellsContainer.innerHTML = renderedHtml;

  
      
    
  });
  
