import React from "react";
import "./MenuPage.css";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

const menuData = [
  {
    category: "Hot Drinks",
    items: [
      { name: "Espresso", kcal: 3, price: 13 },
      { name: "Macchiato", kcal: 13, price: 17 },
      { name: "Cortado", kcal: 15, price: 18 },
      { name: "Flat White", kcal: 120, price: 18 },
      { name: "Cappuccino", kcal: 105, price: 20 },
      { name: "Latte", kcal: 165, price: 20 },
      { name: "Americano", kcal: 3, price: 16 },
      { name: "Hot Chocolate", kcal: 194, price: 20 },
      { name: "Tea", kcal: 0, price: 13, description: "English Breakfast | Green Tea with Jasmine" },
    ],
  },
  {
    category: "Drip Coffee",
    items: [
      { name: "V60", kcal: 10, price: 20 },
      { name: "Iced V60", kcal: 6, price: 22 },
      { name: "Chemex", kcal: 4, price: 20 },
      { name: "Cold Brew", kcal: 15, price: 25 },
      { name: "Coffee of the Day", kcal: 5, price: 16 },
    ],
  },
  {
    category: "Decaf",
    items: [{ name: "Rawanda", kcal: 5, price: 23 }],
  },
  {
    category: "Signatures",
    items: [
      { name: "Aurum Signature", kcal: 223, price: 30 },
      { name: "Cinnamon Latte", kcal: 197, price: 28 },
    ],
  },
];

function MenuPage() {
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

export default MenuPage;
