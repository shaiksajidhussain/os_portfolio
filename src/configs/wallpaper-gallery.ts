export interface WallpaperItem {
  id: string;
  name: string;
  url: string;
  category: string;
}

export interface WallpaperCategory {
  id: string;
  title: string;
  wallpapers: WallpaperItem[];
}

export const wallpaperCategories: WallpaperCategory[] = [
  {
    id: "dynamic",
    title: "Dynamic Wallpapers",
    wallpapers: [
      {
        id: "sequoia",
        name: "Sequoia",
        url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "dynamic"
      },
      {
        id: "macintosh",
        name: "Macintosh",
        url: "https://images.unsplash.com/photo-1505699261378-c372af38134c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "dynamic"
      },
      {
        id: "sonoma",
        name: "Sonoma",
        url: "https://images.unsplash.com/photo-1459909633680-206dc5c67abb?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "dynamic"
      },
      {
        id: "ventura",
        name: "Ventura",
        url: "https://images.unsplash.com/photo-1500073584060-670c36a703f1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "dynamic"
      },
      {
        id: "ventura",
        name: "Ventura",
        url: "https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "dynamic"
      },
      {
        id: "ventura",
        name: "Ventura",
        url: "https://i.pinimg.com/1200x/ef/78/99/ef7899d792526a5d10f33c30ad250617.jpg",
        category: "dynamic"
      }
    ]
  },
  {
    id: "landscape",
    title: "Landscape",
    wallpapers: [
      {
        id: "sequoia-sunrise",
        name: "Sequoia Sunrise",
        url: "https://i.pinimg.com/1200x/be/62/16/be6216d2b068e0b76f88cded8c21e2a7.jpg",
        category: "landscape"
      },
      {
        id: "sonoma-horizon",
        name: "Sonoma Horizon",
        url: "img/ui/wallpaper.jpg",
        category: "landscape"
      },
      {
        id: "temblor-range",
        name: "California's Temblor Range",
        url: "img/ui/wallpaper-day.jpg",
        category: "landscape"
      },
      {
        id: "redwoods",
        name: "Redwoods from Above",
        url: "img/ui/wallpaper-night.jpg",
        category: "landscape"
      }
    ]
  },
  {
    id: "cityscape",
    title: "Cityscape",
    wallpapers: [
      {
        id: "dubai",
        name: "Dubai Skyline",
        url: "img/ui/wallpaper.jpg",
        category: "cityscape"
      },
      {
        id: "los-angeles",
        name: "Los Angeles Flyover",
        url: "img/ui/wallpaper-day.jpg",
        category: "cityscape"
      },
      {
        id: "london",
        name: "London Evening",
        url: "img/ui/wallpaper-night.jpg",
        category: "cityscape"
      },
      {
        id: "new-york",
        name: "New York Night",
        url: "img/ui/wallpaper.jpg",
        category: "cityscape"
      }
    ]
  },
  {
    id: "underwater",
    title: "Underwater",
    wallpapers: [
      {
        id: "jellyfish",
        name: "Alaskan Jellyfish Light",
        url: "img/ui/wallpaper-day.jpg",
        category: "underwater"
      },
      {
        id: "dolphin",
        name: "California Dolphin Pod",
        url: "img/ui/wallpaper.jpg",
        category: "underwater"
      },
      {
        id: "kelp",
        name: "California Kelp Forest",
        url: "img/ui/wallpaper-night.jpg",
        category: "underwater"
      },
      {
        id: "tahiti",
        name: "Tahiti Coast",
        url: "img/ui/wallpaper-day.jpg",
        category: "underwater"
      }
    ]
  },
  {
    id: "earth",
    title: "Earth",
    wallpapers: [
      {
        id: "earth-1",
        name: "Earth from Space",
        url: "img/ui/wallpaper.jpg",
        category: "earth"
      },
      {
        id: "earth-2",
        name: "Planet View",
        url: "img/ui/wallpaper-night.jpg",
        category: "earth"
      },
      {
        id: "earth-3",
        name: "Global View",
        url: "img/ui/wallpaper-day.jpg",
        category: "earth"
      },
      {
        id: "earth-4",
        name: "Continental",
        url: "img/ui/wallpaper.jpg",
        category: "earth"
      }
    ]
  }
];

export const allWallpapers: WallpaperItem[] = wallpaperCategories.flatMap(
  (category) => category.wallpapers
);

