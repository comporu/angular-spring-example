/*
 * Copyright (c) 2020.
 *  This file is part of the Compo B2B application.
 *  (c) Compo soft - Vladimir Ganturin <gun2rin@gmail.com>
 *  For the full copyright and license information, please view the LICENSE
 *  file that was distributed with this source code.
 *
 */

package dev.compo.example.dto;

import lombok.Getter;
import java.util.Map;

/** The type Api error details. The API basic response */
@Getter
public class ApiResponseDetails<T> {

  private final String message;
  private Boolean success = false;
  private Map<String, String> errors;
  private T data;

  /**
   * Instantiates a new Api error details.
   *
   * @param message the message
   */
  public ApiResponseDetails(String message) {

    this.message = message;
  }

  /**
   * Sets success.
   *
   * @param success the success
   */
  public void setSuccess(Boolean success) {
    this.success = success;
  }

  /**
   * Instantiates a new Api response details.
   *
   * @param message the message
   * @param errors the errors
   */
  public ApiResponseDetails(String message, Map<String, String> errors) {
    this.message = message;
    this.errors = errors;
  }

  public void setData(T data) {
    this.data = data;
  }
}
