import CustomOrder from '../models/CustomOrder.js';

// @desc    Create new custom order
// @route   POST /api/custom-orders
// @access  Private
export const createCustomOrder = async (req, res) => {
  const { projectType, description, budget } = req.body;

  const customOrder = new CustomOrder({
    user: req.user._id,
    projectType,
    description,
    budget,
  });

  const createdOrder = await customOrder.save();
  res.status(201).json(createdOrder);
};

// @desc    Get user custom orders
// @route   GET /api/custom-orders/myprojects
// @access  Private
export const getMyCustomOrders = async (req, res) => {
  const projects = await CustomOrder.find({ user: req.user._id });
  res.json(projects);
};
