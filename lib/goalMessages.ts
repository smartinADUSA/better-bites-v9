export function getGoalMessage(
    goal: string
  ) {
    switch (goal) {
      case "weight":
        return "Products selected to support fullness and nutrition quality.";
  
      case "protein":
        return "Focus on foods higher in protein.";
  
      case "fiber":
        return "Focus on foods higher in fiber.";
  
      case "sugar":
        return "Focus on foods lower in sugar.";
  
      case "glp1":
        return "Focus on products with strong GLP-1 nutrition scores.";
  
      default:
        return "";
    }
  }
  