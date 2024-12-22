import React from "react";
import "./Menu.css";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

const menuData = [
  {
    category: "Desserts",
    items: [
      { name: "Cheesecake", kcal: 382, price: 28 },
      { name: "Pritzel Cake", kcal: 682, price: 28 },
      { name: "Matilda Cake", kcal: 402, price: 28 },
      { name: "Muffin Pecan", kcal: 380, price: 22 },
      { name: "Lemon Cake", kcal: 300, price: 19 },
      {
        name: "Mini Pancake",
        kcal: 340,
        price: 22,
        description: "12 pieces with Nutella or Pistachio sauce",
      },
    ],
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Chicken Tikka", kcal: 414, price: 27 },
      { name: "Club Sandwich", kcal: 562, price: 27 },
      { name: "Croissant", kcal: 231, price: 12 },
      { name: "Cheese Croissant", kcal: 240, price: 16 },
      { name: "Thyme Croissant", kcal: 245, price: 14 },
    ],
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Ice Americano", kcal: 3, price: 18 },
      { name: "Ice Latte", kcal: 130, price: 20 },
      { name: "Pistachio Latte", kcal: 230, price: 32 },
      { name: "Classic Ice Tea", kcal: 76, price: 22 },
      { name: "Ice Tea", kcal: 170, price: 25 },
      { name: "Passionfruit Mojito", kcal: 190, price: 26 },
      { name: "Aurum Mojito", kcal: 200, price: 28 },
      { name: "Special Matcha", kcal: 70, price: 34 },
      { name: "Iced Chocolate", kcal: 210, price: 25 },
      { name: "Water", kcal: 0, price: 3 },
      { name: "Sparkling Water", kcal: 0, price: 8 },
      { name: "Additionals", kcal: 0, price: 5, description: "Coconut Milk | Almond Milk | Syrups" },
    ],
  },
  // Continue adding other sections (Hot Drinks, Drip Coffee, etc.)
];

function Menu() {
  return (
    <section id="menu" className="menu">
      <Typography variant="h3" className="menu-title">
        Our Menu
      </Typography>
      {menuData.map((category) => (
        <div key={category.category} className="menu-category">
          <Typography variant="h4" className="menu-category-title">
            {category.category}
          </Typography>
          <Grid container spacing={3} className="menu-grid">
            {category.items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="menu-item-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description ? item.description : `${item.kcal} kcal`}
                    </Typography>
                    <Typography variant="h6" className="menu-price">
                      {item.price} SAR
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </section>
  );
}

export default Menu;
