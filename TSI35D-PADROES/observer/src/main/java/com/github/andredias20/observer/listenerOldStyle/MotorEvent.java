package observer.listenerOldStyle;

import observer.motor.Motor;
import observer.motor.MotorState;

public class MotorEvent
{
   public final Motor source;
   public final MotorState state;

   public MotorEvent(Motor source, MotorState state)
   {
      this.source = source;
      this.state = state;
   }
}