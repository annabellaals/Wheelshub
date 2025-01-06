// The Deals component displays a list of all car listings posted by the current user.
// It shows listing details including the car make/model, price, and specifications.
// Users can view and manage their posted car listings in one centralized place.
// The component provides an overview of the user's selling activity on the platform.

// Libs
import React, { useState, useEffect } from "react";
import { Box, Card, Typography, Stack, Button, Sheet, Modal, ModalClose, Input, FormLabel, FormControl, FormHelperText } from '@mui/joy';
import theme from "../themes";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Define the API endpoint URL
const API_URL = process.env.REACT_APP_API_URL;

const Deals = () => {

  // For data
  const navigate = useNavigate();

  var [deals, setDeals] = useState(null);

  // Get deals on component mount
  useEffect(() => {

    const fetchDeals = async () => {

      try {

        const response = await fetch(`${API_URL}/user/deals`, {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },

        });

        // If unauthorized, redirect to login
        if (response.status === 401) {

          navigate("/login");

          return;

        }

        // Get deals data
        const data = await response.json();

        setDeals(data.deals);

      } catch (error) {

        console.error("Error fetching deals:", error);

      }
    };

    fetchDeals();

  }, []);

   const deleteDealApi = async (dealId) => {
    try {
      const response = await fetch(`${API_URL}/user/deals/delete/${dealId}/`, { 
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
       });
      
      if (response.ok) {
        setDeals((prevDeals) => prevDeals.filter(item => item.id !== dealId));
      } else {
        throw new Error('Failed to update deal');
      }
    } catch (error) {
      console.error('Error deleting deal:', error);
    }
  };

  const updateDealApi = async (dealId, updatedDeal) => {
    try {
      const response = await fetch(`${API_URL}/user/deals/update/${dealId}/`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedDeal),
      });
      if (response.ok) {
        setDeals((prevDeals) =>
          prevDeals.map((item) =>
            item.id === dealId ? { ...item, ...updatedDeal } : item
          )
        );
      } else {
        throw new Error('Failed to update deal');
      }
    } catch (error) {
      console.error('Error updating deal:', error);
    }
  };

  // Show loader
  if (!deals) {

    return <Box sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}>

        <Typography level="h2" sx={{ color: theme.colors.primary }}>Wheels Hub</Typography>

      </motion.div>
    </Box>
  }

  if (deals.length === 0) {

    return <Card variant="outlined" sx={{ maxWidth: "500px", mx: "auto", p: 4, my: 10, textAlign: 'center' }}>

      <Typography level="h4" sx={{ mb: 2 }}>You haven't created any deals yet</Typography>
      <Typography level="body-md" sx={{ mb: 3 }}>Get started by creating your first listing</Typography>

      <Button variant="solid" sx={{ bgcolor: theme.colors.primary }} onClick={() => navigate('/create')}>
        Create Listing
      </Button>

    </Card>

  }

  return <Box sx={{ px: 20, py: 10 }}>

    {/* Title */}
    <Stack direction="row" alignItems="flex-start">

      {/* Dynamic title based on user type */}
      <Typography level="h5" sx={{ fontSize: "24px", fontWeight: "700", mb: 6, mr: 1 }}>Your Deals</Typography>

      {/* Count */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.primary, color: "white", borderRadius: "8px", px: 1.5, py: 1, fontSize: "14px", fontWeight: "700" }}>

        {String(deals.length).padStart(2, "0")}

      </Box>

    </Stack>

    {/* Deals list */}
    <Stack spacing={4}>
      {deals.map(deal => (
        <DealCard key={deal.id} deal={deal}  deleteDealApi={deleteDealApi} updateDealApi={updateDealApi}/>
      ))}

    </Stack>

  </Box>
};



export default Deals;


function DealCard({ deal, deleteDealApi,  updateDealApi}) {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [editedDeal, setEditedDeal] = React.useState(deal);
  const navigate = useNavigate();

  const handleDelete = (dealId) => {
    deleteDealApi(dealId);
    setOpenDeleteDialog(false);
  };

  const handleEdit = (dealId) => {
    updateDealApi(dealId, editedDeal);
    setOpenEditDialog(false);
  };

  const handleChange = (e) => {
    setEditedDeal({
      ...editedDeal,
      [e.target.name]: e.target.value,
    });
  };

  

  return (
    <Card key={deal.id} variant="outlined" sx={{ p: 4, cursor: 'pointer', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <Box>
          <Typography level="h4" sx={{ mb: 0.5 }}>
            {deal.make} – {deal.model}
          </Typography>
          <Typography level="body-sm" color="neutral" sx={{ textTransform: 'capitalize' }}>
            {deal.body_type}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Typography level="body-sm">⛽️ {deal.engine_capacity}</Typography>
            <Typography level="body-sm">⚙️ {deal.transmission}</Typography>
          </Stack>
        </Box>
        <Typography level="h4">$ {Number(deal.price).toLocaleString()}</Typography>
      </Box>

      {/* Buttons in the bottom corners */}
      <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
      <Button variant="outlined" color="success" sx={{ marginRight: 1 }} onClick={() => navigate(`/view/${deal.id}`)}>
          View Deal
        </Button>

        <Button variant="outlined" color="danger" sx={{ marginRight: 1 }} onClick={() => setOpenDeleteDialog(true)}>
          Delete
        </Button>
        <Button variant="outlined" onClick={() => setOpenEditDialog(true)}>
          Edit
        </Button>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Modal open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Sheet variant="outlined" sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg', borderRadius: '5px' }}>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography component="h2" level="h4" textColor="inherit" sx={{ fontWeight: 'sm', mb: 3, mt:3 }}>
            Are you sure you want to delete this deal?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
            <Button onClick={() => handleDelete(deal.id)} color="danger">
              Delete
            </Button>
          </Box>
        </Sheet>
      </Modal>

      {/* Edit Deal Dialog */}
      <Modal open={openEditDialog} onClose={() => setOpenEditDialog(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Sheet variant="outlined" sx={{ minWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg', borderRadius: '5px',  }}>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography component="h2" level="h4" textColor="inherit" sx={{ fontWeight: 'lg', mb: 1 }}>
            Edit Deal
          </Typography>

          {/* Form Fields for Editing */}

          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              name="title"
              value={editedDeal.title}
              onChange={handleChange}
            />
          </FormControl>


          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel htmlFor="make">Make</FormLabel>
            <Input
              id="make"
              name="make"
              value={editedDeal.make}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel htmlFor="model">Model</FormLabel>
            <Input
              id="model"
              name="model"
              value={editedDeal.model}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              name="price"
              value={editedDeal.price}
              onChange={handleChange}
            />
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
            <Button onClick={() => handleEdit(deal.id)} >Save</Button>
          </Box>
        </Sheet>
      </Modal>
    </Card>
  );
}
