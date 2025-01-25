import { useVoice } from "@humeai/voice-react";
import { motion } from "framer-motion";

export default function Widget() {
  const { status } = useVoice();

  return (
    <motion.div
      className="widget-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Connection Status</h2>
      <p>{status.value === "connected" ? "Connected" : "Disconnected"}</p>
    </motion.div>
  );
}