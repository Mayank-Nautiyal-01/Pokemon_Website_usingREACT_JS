# Pokémon Search App

This is a simple **Pokémon Search App** built using **React.js** and **Tailwind CSS**. The app fetches Pokémon data from the PokéAPI and displays it in a card-based UI. Users can search for Pokémon by name using the search bar.

---
## Features ✨
- Fetches and displays **100(according to my given limit) Pokémon** from the PokéAPI.
- **Search functionality** to filter Pokémon by name.
- **Displays essential stats** such as type, height, weight, speed, attack, experience, and abilities.
- **Responsive design** with Tailwind CSS.

---
## Tech Stack 🛠️
- **React.js** - Frontend library
- **Tailwind CSS** - Styling
- **PokéAPI** - Fetching Pokémon data

---
## How to Run the Project 🚀

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/pokemon-app.git
cd pokemon-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
This will start the app at `http://localhost:3000`.

---
## Project Structure 📂
```
.
├── src
│   ├── components
│   │   ├── Pokemon.js       # Fetch and display Pokémon
│   │   ├── PokemonCards.js  # Card component for each Pokémon
│   ├── App.js               # Main entry point
│   ├── index.js             # React DOM rendering
│   ├── styles.css           # Styling (if any extra styles added)
├── public
├── package.json
├── README.md
```

---
## Explanation for Beginners 📖

### 1️⃣ **Fetching Pokémon Data**
The app makes an API request to `https://pokeapi.co/api/v2/pokemon?limit=100` to get a list of Pokémon. Then, it fetches **detailed data** (like images, stats, and abilities) for each Pokémon.

### 2️⃣ **Search Functionality**
The `search` state stores user input. The Pokémon list is filtered to match names that include the search text (case-insensitive).
```js
const filteredPokemon = search
  ? pokemon.filter((curPokemon) =>
      curPokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  : pokemon;
```

### 3️⃣ **Rendering Pokémon Cards**
Each Pokémon's details (image, type, stats) are displayed using the `PokemonCard` component.
```jsx
<PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
```

### 4️⃣ **Styling with Tailwind CSS**
Tailwind classes are used for layout and design.
```html
<input type="text" className="px-4 py-2 border rounded-lg focus:ring focus:ring-green-300" />
