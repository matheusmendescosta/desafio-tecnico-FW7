import { Router } from "express";
import { CreateLinkController } from "../controllers/create-link";
import { GetShortedLink } from "../controllers/get-short-link";

const router = Router();

router.post("/link", (req, res) => CreateLinkController(req, res));
router.get("/:shortedLink", (req, res) => GetShortedLink(req, res));

export default router;
